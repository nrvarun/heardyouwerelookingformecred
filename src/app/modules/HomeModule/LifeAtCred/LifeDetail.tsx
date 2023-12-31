import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  icon: string;
};

const LifeDetail = ({ title, desc, icon = "/icons/features.svg" }: Props) => {
  return (
    <article className="grid grid-cols-[64px_auto] gap-6 md:gap-8 lg:gap-10">
      <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-6 md:mr-8 lg:mr-10">
        <Image
          width={16}
          height={16}
          src={icon}
          alt="icon"
          className="w-full h-auto"
        />
      </div>
      <div>
        <h3 className="text-black text-md md:text-base lg:text-xl mb-4 md:mb-6 lg:mb-8 font-semibold">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 font-medium">{desc}</p>
      </div>
    </article>
  );
};

export default LifeDetail;
