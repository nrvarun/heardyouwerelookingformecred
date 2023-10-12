import React from "react";

type Props = {
  text: React.ReactNode;
};

const WhyCredDesc = ({ text }: Props) => {
  return (
    <p className="text-base md:text-xl lg:text-2xl text-white font-semibold">
      {text}
    </p>
  );
};

export default WhyCredDesc;
