import Link from "next/link";
import Image from "next/image";

const Header = ({ pathname }) => {
  const headerTitle = () => {
    switch (pathname) {
      case "/":
        return "유성고등학교 학생";

      case "/chat":
        return "채팅";

      case "/user":
        return "사용자 설정";
    }
  };

  return (
    <header className="relative w-full px-5 z-50 shadow-md">
      <div className="mx-auto py-1">
        <div className="flex items-center justify-center h-14">
          <div>
            <Link href="/">
              <a>
                <div className="flex justify-center items-center space-x-1 transform transition-all duration-150 hover:scale-105">
                  <Image
                    src="/logo.svg"
                    alt="유성고등학교 로고"
                    height="34"
                    width="34"
                  />
                  <h1 className="text-2xl font-bold cursor-pointer">
                    {headerTitle()}
                  </h1>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
