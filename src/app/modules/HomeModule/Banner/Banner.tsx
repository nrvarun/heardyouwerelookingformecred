import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="flex min-h-screen bg-slate-200">
      <div className="container flex min-h-screen">
        <div className="m-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-12 lg:mb-14">
            opportunities are infinite.
          </h2>

          <button className="bg-black font-bold text-sm md:text-base lg:text-lg rounded-[12px] mx-auto text-white px-5 py-2 flex items-center">
            find yours
            <span className="ml-2">
              <Image
                width={14}
                height={14}
                src="/icons/right-arrow.svg"
                alt="right arrow"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
