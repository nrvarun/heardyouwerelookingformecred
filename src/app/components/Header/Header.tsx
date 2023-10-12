import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex w-full fixed top-0 left-0 right-0 p-4 md:p-6 border-b z-50 border-b-gray-200 bg-white">
      <Image
        className="mx-auto"
        src={"/images/cred-black.png"}
        width={120}
        height={39}
        alt="the awesome cred logo"
      />
    </header>
  );
};

export default Header;
