import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/images/logo-front.svg"
        alt="Arab Network"
        width="200"
        height="53"
      />
    </Link>
  );
};

export default Logo;
