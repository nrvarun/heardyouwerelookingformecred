import React from "react";
import Banner from "./Banner";
import MasonryGallery from "@/app/components/MasonryGallery";
import WhyCred from "./WhyCred";
import LifeAtCred from "./LifeAtCred";
import HireMeCred from "./HireMeCred";
import MyWork from "./MyWork";

type Props = {};

const HomeModule = (props: Props) => {
  return (
    <main className="mt-[80px] lg:mt-[103px]">
      <Banner />
      <WhyCred />
      <LifeAtCred />
      <MyWork />
      <HireMeCred />
    </main>
  );
};

export default HomeModule;
