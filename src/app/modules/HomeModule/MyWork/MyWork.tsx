import React from "react";
import PortfolioWork from "./PortfolioWork";

type Props = {};

const MyWork = (props: Props) => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-10">
      <div className="container max-w-[880px]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 lg:gap-32 mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-10 lg:mb-0 lg:leading-tight text-primary-blue">
            Enough talk, lets show you some of my work.
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
            title="Digeca"
            desc="a B2B/B2C platform with fully-fledged features"
            link="https://digeca.tatasteel.com"
          />
          <PortfolioWork
            title="Right side up"
            desc="a small but site with some humble interactions"
            link="https://rightsideup.com/"
          />
          <PortfolioWork
            title="Chakra"
            desc="a website for a Web3 gaming start-up"
            link="https://www.chakra.world/"
          />
          <PortfolioWork
            title="Unsplash Clone"
            desc="Just something i did, as i was bored in the lockdown"
            link="https://splashsearch.vercel.app/"
          />
          <PortfolioWork
            title="Achuta"
            desc="Portfolio site for a budding designer"
            link="https://achuta.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default MyWork;
