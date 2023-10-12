import Image from "next/image";

type Props = {
  detail: string;
};

const CredCard = ({ detail = "we are looking for you!" }: Props) => {
  return (
    <article className="w-full p-10 md:p-20 lg:p-32 bg-black rounded-[16px] text-center">
      <Image
        width={100}
        height={100}
        src="/images/cred-logo.webp"
        className="inline-block mb-8 md:mb-10 lg:mb-12"
        alt="lets the logo is awesome 💓"
      />
      <p className="text-md md:text-xl lg:text-2xl text-white">{detail}</p>
    </article>
  );
};

export default CredCard;
