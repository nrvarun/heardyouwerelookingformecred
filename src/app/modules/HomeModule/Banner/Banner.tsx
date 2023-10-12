import MasonryGallery from "@/app/components/MasonryGallery";
import Image from "next/image";

type Props = {};

const GALLERY_ENTRIES = [
  {
    id: 1,
    title: "1",
    path: "https://careers.cred.club/Images/landingPage_1.jpg",
  },
  {
    id: 2,
    title: "2",
    path: "https://careers.cred.club/Images/landingPage_2.jpg",
  },
  {
    id: 3,
    title: "3",
    path: "https://careers.cred.club/Images/landingPage_3.jpg",
  },
  {
    id: 4,
    title: "4",
    path: "https://careers.cred.club/Images/landingPage_4.jpg",
  },
  {
    id: 5,
    title: "5",
    path: "https://careers.cred.club/Images/landingPage_5.jpg",
  },
  {
    id: 6,
    title: "6",
    path: "https://careers.cred.club/Images/landingPage_6.jpg",
  },
];

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
      <div className="container mt-20 md:mt-32 lg:mt-40 hidden lg:block">
        <MasonryGallery items={GALLERY_ENTRIES} />
      </div>
    </section>
  );
};

export default Banner;
