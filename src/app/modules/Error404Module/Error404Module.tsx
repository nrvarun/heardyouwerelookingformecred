import Link from "next/link";
import React from "react";

type Props = {};

const Error404Module = (props: Props) => {
  return (
    <section className="min-h-screen flex">
      <div className="m-auto text-center">
        <h3 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">
          Oops are you stranded.
        </h3>
        <p className="text-md md:text-base lg:text-xl">
          Dont worry here you go back{" "}
          <span className="underline">
            <Link href="/"> home</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Error404Module;
