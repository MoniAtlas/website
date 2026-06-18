import { createHash, createHmac } from "node:crypto";

import {
  getCognitoClientId,
  getCognitoEnvKeysPresent,
  getCognitoRegion,
  getCognitoUserPoolId,
} from "@/lib/cognito/config";

export const dynamic = "force-dynamic";

type CognitoAction =
  | "AWSCognitoIdentityProviderService.DescribeUserPool"
  | "AWSCognitoIdentityProviderService.DescribeUserPoolClient";

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function hmac(key: Buffer | string, value: string) {
  return createHmac("sha256", key).update(value).digest();
}

function getSigningKey(secretAccessKey: string, date: string, region: string) {
  const dateKey = hmac(`AWS4${secretAccessKey}`, date);
  const regionKey = hmac(dateKey, region);
  const serviceKey = hmac(regionKey, "cognito-idp");

  return hmac(serviceKey, "aws4_request");
}

async function canCallCognito(action: CognitoAction, body: object) {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const sessionToken = process.env.AWS_SESSION_TOKEN;
  const region = getCognitoRegion();

  if (!accessKeyId || !secretAccessKey || !region) {
    return false;
  }

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const date = amzDate.slice(0, 8);
  const host = `cognito-idp.${region}.amazonaws.com`;
  const payload = JSON.stringify(body);

  const headers: Record<string, string> = {
    "content-type": "application/x-amz-json-1.1",
    host,
    "x-amz-date": amzDate,
    "x-amz-target": action,
  };

  if (sessionToken) {
    headers["x-amz-security-token"] = sessionToken;
  }

  const signedHeaders = Object.keys(headers).sort().join(";");
  const canonicalHeaders = Object.keys(headers)
    .sort()
    .map((key) => `${key}:${headers[key]}\n`)
    .join("");
  const canonicalRequest = [
    "POST",
    "/",
    "",
    canonicalHeaders,
    signedHeaders,
    hash(payload),
  ].join("\n");
  const credentialScope = `${date}/${region}/cognito-idp/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    hash(canonicalRequest),
  ].join("\n");
  const signature = createHmac(
    "sha256",
    getSigningKey(secretAccessKey, date, region),
  )
    .update(stringToSign)
    .digest("hex");

  try {
    const response = await fetch(`https://${host}/`, {
      method: "POST",
      headers: {
        ...headers,
        authorization: [
          `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}`,
          `SignedHeaders=${signedHeaders}`,
          `Signature=${signature}`,
        ].join(", "),
      },
      body: payload,
    });

    return response.ok;
  } catch {
    return false;
  }
}

export async function GET() {
  const userPoolId = getCognitoUserPoolId();
  const clientId = getCognitoClientId();
  const cognitoEnvKeysPresent = getCognitoEnvKeysPresent();

  return Response.json(
    {
      hasCognitoUserPoolId: Boolean(userPoolId),
      has_MONIATLAS_COGNITO_USER_POOL_ID: Boolean(
        process.env.MONIATLAS_COGNITO_USER_POOL_ID,
      ),
      has_COGNITO_USER_POOL_ID: Boolean(process.env.COGNITO_USER_POOL_ID),
      hasCognitoClientId: Boolean(clientId),
      hasCognitoClientSecretName: Boolean(
        process.env.COGNITO_CLIENT_SECRET_NAME,
      ),
      canLoadCognitoClientSecret: false,
      canDescribeUserPool: userPoolId
        ? await canCallCognito(
            "AWSCognitoIdentityProviderService.DescribeUserPool",
            { UserPoolId: userPoolId },
          )
        : false,
      canDescribeUserPoolClient:
        userPoolId && clientId
          ? await canCallCognito(
              "AWSCognitoIdentityProviderService.DescribeUserPoolClient",
              { ClientId: clientId, UserPoolId: userPoolId },
            )
          : false,
      cognitoEnvKeysPresent,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
