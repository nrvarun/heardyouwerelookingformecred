import { BRAND_LOGO } from "@/app/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex w-full fixed top-0 left-0 right-0 p-4 md:p-6 border-b border-b-gray-200 bg-white">
      <Image
        className="mx-auto"
        src={BRAND_LOGO}
        width={120}
        height={39}
        alt="the awesome cred logo"
      />
    </header>
  );
};

export default Header;
