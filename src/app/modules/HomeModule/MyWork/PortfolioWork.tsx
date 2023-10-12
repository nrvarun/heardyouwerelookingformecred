import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  desc: string;
  link?: string;
};

const PortfolioWork = ({ title, desc, link = "" }: Props) => {
  return (
    <article className="border border-gray-900 bg-primary-blue rounded-xl p-8 lg:p-12">
      <div>
        <div className="flex items-center mb-4">
          <h3 className="text-white text-md md:text-base lg:text-xl font-semibold mr-2">
            {title}
          </h3>
          <Link href={link} target="_blank">
            <Image src="/icons/url.svg" width={16} height={16} alt="" />
          </Link>
        </div>
        <p className="text-xs md:text-sm text-gray-100 font-medium">{desc}</p>
      </div>
    </article>
  );
};

export default PortfolioWork;
