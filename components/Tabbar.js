import Link from "next/link";
import { MdChat, MdHomeFilled, MdPeopleAlt } from "react-icons/md";

const Tabbar = ({ pathname }) => {
  const TabbarLink = ({ label, icon, href }) => {
    return (
      <Link href={href}>
        <a>
          <div
            className={`flex flex-col justify-center items-center px-8 py-1 z-50 ${
              pathname === href && "border-b-2 border-blue-500 text-blue-500"
            }`}
          >
            {icon}
            <p>{label}</p>
          </div>
        </a>
      </Link>
    );
  };

  return (
    <nav className="flex fixed overflow-hidden bottom-0 z-50 justify-between items-center w-full h-20 pb-14 pt-8 px-10 bg-gray-50">
      <TabbarLink label="홈" icon={<MdHomeFilled />} href="/" />

      <TabbarLink label="채팅" icon={<MdChat />} href="/chat" />

      <TabbarLink label="만든 사람" icon={<MdPeopleAlt />} href="/credit" />
    </nav>
  );
};

export default Tabbar;
