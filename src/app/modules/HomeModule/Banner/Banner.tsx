import MasonryGallery from "@/app/components/MasonryGallery";
import Image from "next/image";

type Props = {};

const GALLERY_ENTRIES = [
  {
    id: 1,
    title: "1",
    path: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "2",
    path: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "3",
    path: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "4",
    path: "https://plus.unsplash.com/premium_photo-1674407009848-4da7a12b6b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "5",
    path: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "6",
    path: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
