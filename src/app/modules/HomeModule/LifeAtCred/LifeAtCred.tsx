import React from "react";
import LifeDetail from "./LifeDetail";

type Props = {};

const LifeAtCred = (props: Props) => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-10" id="workingWithMe">
      <div className="container max-w-[880px]">
        <div className="grid lg:grid-cols-2 lg:gap-32 mb-14 md:mb-20 lg:mb-36">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-10 lg:mb-0 lg:leading-tight text-primary-blue">
            Now that you know why CRED, a bit about me
          </h2>
          <div>
            <p className="text-md md:text-base lg:text-xl text-gray-500 lg:leading-loose font-medium">
              Being someone who found his passion for frontend and believe that
              the UX is not what you design on the wireframes and sketches, but
              what the user actually get to experience.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 lg:gap-32">
          <LifeDetail
            title="Trajectory"
            icon="/icons/map.svg"
            desc="Self-learnt and It all started from freecodecamp, Udacity and from then on it has been an incredible journey."
          />
          <LifeDetail
            title="Skillsets"
            icon="/icons/tools.svg"
            desc="Framework agnostic but i am usually found dabbling in React, Nextjs, Tailwind, Styled Components etc... "
          />
          <LifeDetail
            title="Traits"
            icon="/icons/features.svg"
            desc="Self-learner, Passionate about tech and driven."
          />
          <LifeDetail
            title="Hobbies"
            icon="/icons/user.svg"
            desc="Usually found enorged in Games, reading a book, listening to some Techno or Lost in Coding"
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtCred;
