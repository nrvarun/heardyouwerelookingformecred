import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#f3f3f3] pt-8 md:pt-12 px-10 lg:pt-14 pb-12 md:pb-16 lg:pb-20">
      <div className="container grid lg:grid-cols-[60%_30%] gap-6 lg:gap-24">
        <div className="w-3/4">
          <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2 lg:mb-3">
            apply to be a CRED member
          </h3>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 mb-1 lg:mb-2">
            CRED is a members-only app that offers you exclusive rewards for
            paying your credit card bill.
          </p>
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 mb-1 lg:mb-2">
            copyright © 2020 Dreamplug Technologies Pvt Ltd.
          </p>
        </div>
        <div className="w-2/3">
          <p className="text-xs md:text-sm lg:text-lg text-gray-500">
            download the app and apply to be a member
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
