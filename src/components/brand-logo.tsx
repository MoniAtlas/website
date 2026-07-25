import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="MoniAtlas home">
      <Image
        src="/moniatlas-logo.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        priority
      />
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-[#004aad]"
        }`}
      >
        MoniAtlas
      </span>
    </Link>
  );
}
