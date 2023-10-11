import Image from "next/image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="pt-28 md:pt-32 lg:pt-40 pb-24 md:pb-28 lg:pb-36">
      <div className="container flex">
        <div className="m-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-12 lg:mb-14 tracking-wider">
            opportunities are infinite.
          </h2>

          <button className="bg-black font-bold text-sm md:text-base lg:text-lg rounded-[20px] mx-auto text-white px-5 py-2 lg:px-10 lg:py-3 flex items-center">
            find yours
            <span className="ml-2">
              <Image
                width={14}
                height={14}
                src="/icons/right-arrow.svg"
                alt="right arrow"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
