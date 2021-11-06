import Link from "next/link";
import { MdChat, MdHomeFilled, MdPeopleAlt } from "react-icons/md";

const Tabbar = ({ pathname }) => {
  const TabbarLink = ({ icon, href }) => {
    return (
      <Link href={href}>
        <a>
          <div
            className={`flex flex-col relative justify-center items-center no-underline px-3 py-2 z-50 text-2xl ${
              pathname === href && "border-b-2 border-blue-500 text-blue-500"
            }`}
          >
            {icon}
          </div>
        </a>
      </Link>
    );
  };

  return (
    <nav className="flex fixed overflow-hidden bottom-0 z-50 justify-between items-center w-full h-20 pb-14 pt-8 px-10 bg-gray-50">
      <TabbarLink icon={<MdHomeFilled />} href="/" />

      <TabbarLink icon={<MdChat />} href="/chat" />

      <TabbarLink icon={<MdPeopleAlt />} href="/credit" />
    </nav>
  );
};

export default Tabbar;
