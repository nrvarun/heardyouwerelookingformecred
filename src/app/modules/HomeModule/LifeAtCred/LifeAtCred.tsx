import React from "react";
import LifeDetail from "./LifeDetail";

type Props = {};

const LifeAtCred = (props: Props) => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-10">
      <div className="container max-w-[880px]">
        <div className="grid lg:grid-cols-2 lg:gap-32 mb-14 md:mb-20 lg:mb-36">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-10 lg:mb-0 lg:leading-tight text-primary-blue">{`want to know what it's like to work at CRED?`}</h2>
          <div>
            <p className="text-md md:text-base lg:text-xl text-gray-500 lg:leading-loose font-medium">
              hard truths: pushing oneself comes with the role. and we realise
              pushing oneself is hard work. which is why CRED is in the
              continuous process of building an environment that helps the team
              rejuvenate oneself.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 lg:gap-32">
          <LifeDetail
            title="kill deadlines, not your appetite."
            desc="paid sick leaves, because your health comes first."
          />
          <LifeDetail
            title="we have your back...and your health."
            desc="a stacked pantry with an all you can eat lunch & dinner."
          />
          <LifeDetail
            title="remember, you can’t respawn in real life."
            desc="a comprehensive health insurance, so you can focus on the healing instead of never ending hospital bills."
          />
          <LifeDetail
            title="what einstein said about time."
            desc="no work timings. because you can’t time a creative process."
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtCred;
