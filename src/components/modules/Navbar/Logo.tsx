"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

const Logo = () => {
  // ============ Router ============
  const router = useRouter();

  // ============ Rendering ============
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={50}
      width={50}
      priority
      src={"/logoRenting.png"}
    />
  );
};

export default Logo;
