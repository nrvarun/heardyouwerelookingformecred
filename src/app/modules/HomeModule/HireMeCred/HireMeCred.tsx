import CredCard from "@/app/components/CredCard";
import React from "react";

type Props = {};

const HireMeCred = (props: Props) => {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-10">
      <div className="container max-w-[880px]">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold lg:leading-tight text-black mb-10 ">
            What do you think
          </h2>
          <CredCard detail="So am i good enough to be in your mafia 😉" />
        </div>
      </div>
    </section>
  );
};

export default HireMeCred;
