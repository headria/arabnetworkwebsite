import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/images/logo-front.svg"
        alt="Arab Network"
        width="240"
        height="63"
      />
    </Link>
  );
};

export default Logo;
