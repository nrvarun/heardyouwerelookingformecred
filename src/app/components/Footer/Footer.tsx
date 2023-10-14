import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#f3f3f3] pt-8 md:pt-12 px-10 lg:pt-14 pb-12 md:pb-16 lg:pb-20">
      <div className="container grid lg:grid-cols-[60%_30%] gap-6 lg:gap-24">
        <div className="w-3/4">
          <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2 lg:mb-3">
            Why i buit this CRED
          </h3>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 mb-1 lg:mb-4">
            I am firm believer in showing that you have a certain feature than
            just talk, so i had to show i can code and this whole thing took me
            a day to make.
          </p>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 mb-1">
            Do take this code and use it for your career site if you really like
            this.
          </p>
        </div>
        <div className="w-2/3">
          <p className="text-xs md:text-sm lg:text-lg text-gray-500">
            Here is where you can find more about me.
          </p>
          <ul className="flex mt-4">
            <li className="mr-4">
              <Link
                href="https://github.com/nrvarun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="just a github svg icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/varunnr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="just a linkedin svg icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
