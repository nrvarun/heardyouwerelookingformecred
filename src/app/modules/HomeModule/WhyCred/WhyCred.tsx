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
          <div className="lg:w-3/4 mx-auto">
            <WhyCredDesc text="simply because, CRED is an incredbile place to work for starters and let me tell you why:" />
          </div>
        </div>
        <div className="mb-12 md:mb-20 lg:mb-28">
          <ul className="w-5/6 md:w-3/5 lg:w-3/4 mx-auto">
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  1
                </p>
              </div>
              <WhyCredDesc text="I love your designs, the amazing CRED app with a stunning UX and all the micro-interactions." />
            </li>
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  2
                </p>
              </div>
              <WhyCredDesc text="To work with the tech geniuses at CRED would be just incredible." />
            </li>
            <li className="text-center mb-12 md:mb-20 lg:mb-28">
              <div className="w-12 h-12 mb-4 md:mb-6 lg:mb-8 rounded-full border inline-flex">
                <p className="text-base md:text-xl lg:text-2xl text-white m-auto">
                  3
                </p>
              </div>
              <WhyCredDesc text="Last but never the least, the culture." />
            </li>
          </ul>
        </div>
        <div className="text-center">
          <WhyCredDesc text="I am rather excited about the growth and learning opportunity i would be getting if i do get to be part of the team than anything else!" />
        </div>
      </div>
    </section>
  );
};

export default WhyCred;
