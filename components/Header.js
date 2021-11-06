import Link from "next/link";
import Image from "next/image";

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const Header = () => {
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
                    유성고등학교
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
