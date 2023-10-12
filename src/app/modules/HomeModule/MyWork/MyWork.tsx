import React from "react";
import PortfolioWork from "./PortfolioWork";

type Props = {};

const MyWork = (props: Props) => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-10">
      <div className="container max-w-[880px]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 lg:gap-32 mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-10 lg:mb-0 lg:leading-tight text-primary-blue">
            I am not all talk, lets show you some of my work too.
          </h2>
          <div>
            <p className="text-md md:text-base lg:text-xl text-gray-500 lg:leading-loose font-medium">
              These are some of latest work, that i have done in the last one
              year. There is more obviously, which we can talk about later on.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 lg:gap-32">
          <PortfolioWork
            title="Achuta"
            desc="paid sick leaves, because your health comes first."
            link="https://achuta.vercel.app/"
          />
          <PortfolioWork
            title="Digeca"
            desc="a comprehensive health insurance, so you can focus on the healing instead of never ending hospital bills."
            link="https://digeca.tatasteel.com"
          />
          <PortfolioWork
            title="Right side up"
            desc="a stacked pantry with an all you can eat lunch & dinner."
            link="https://rightsideup.com/"
          />
          <PortfolioWork
            title="Chakra"
            desc="a stacked pantry with an all you can eat lunch & dinner."
            link="https://www.chakra.world/"
          />
          <PortfolioWork
            title="Illiquid labs"
            desc="no work timings. because you can’t time a creative process."
            link="https://www.illiquidlabs.com/"
          />
          <PortfolioWork
            title="Unsplash Clone"
            desc="no work timings. because you can’t time a creative process."
            link="https://splashsearch.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default MyWork;
