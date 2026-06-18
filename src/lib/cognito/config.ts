export function getCognitoUserPoolId() {
  return (
    process.env.MONIATLAS_COGNITO_USER_POOL_ID ||
    process.env.COGNITO_USER_POOL_ID
  );
}

export function getCognitoClientId() {
  return process.env.COGNITO_CLIENT_ID;
}

export function getCognitoRegion() {
  return (
    process.env.AWS_REGION ||
    process.env.AWS_DEFAULT_REGION ||
    getCognitoUserPoolId()?.split("_")[0]
  );
}

export function getCognitoEnvKeysPresent() {
  return Object.keys(process.env)
    .filter((key) => key.includes("COGNITO"))
    .sort();
}
