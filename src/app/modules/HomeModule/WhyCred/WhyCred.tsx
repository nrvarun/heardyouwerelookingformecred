import React from "react";
import WhyCredDesc from "./WhyCredDesc";

type Props = {};

const WhyCred = (props: Props) => {
  return (
    <section className="relative bg-primary-blue py-12 md:py-21 lg:py-[100px] px-10">
      <div className="container max-w-[787px]">
        <div className="mb-12 md:mb-20 lg:mb-28">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white text-center mb-6 md:mb-8 lg:mb-10 font-bold">
            why CRED?
          </h2>
          <WhyCredDesc text="simply because, CRED is the nucleus of all great minds at work. to elaborate more on the why, here’s a thought experiment for you:" />
        </div>
        <div className="mb-12 md:mb-20 lg:mb-28">
          <ul className="w-5/6 md:w-3/5 lg:w-3/4 mx-auto">
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  1
                </p>
              </div>
              <WhyCredDesc text="put a group of incredibly passionate, driven individuals together." />
            </li>
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  2
                </p>
              </div>
              <WhyCredDesc text="give them the complete freedom to chase down their goals in a complete uninhibited manner." />
            </li>
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  3
                </p>
              </div>
              <WhyCredDesc text="you will have CRED." />
            </li>
          </ul>
        </div>
        <div className="text-center">
          <WhyCredDesc text="the CRED manifesto is crowd sourced from these very people, all rooted in different backgrounds but sharing the same ethos; to continuously push oneself and in the process, the community." />
        </div>
      </div>
    </section>
  );
};

export default WhyCred;
