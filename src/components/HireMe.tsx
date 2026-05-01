import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const HireMeCard: React.FC = () => {
  return (
    <div className="fixed top-12 right-0 m-8 transform hover:-translate-y-2 transition duration-500 ease-in-out hidden sm:block z-40">
      <Link
        href="mailto:kevinchen.dev1993@email.com"
        className="bg-transparent text-white border border-gray-600 hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full flex items-center"
      >
        <FaBriefcase className="text-2xl mr-2" />
        <span className="text-md md:text-sm hover:text-black">
          Let&apos;s work together!
        </span>
      </Link>
    </div>
  );
};

export default HireMeCard;
