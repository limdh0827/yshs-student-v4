import Image from "next/image";
import packageInfo from "../package.json";

const Footer = () => {
  return (
    <div className="mt-5 mb-5 mx-auto w-full border-t pt-4">
      <div className="flex flex-col w-full justify-center items-center">
        <p>
          {process.env.NODE_ENV === "development" ? "Dev mode" : "Production"} -{" "}
          {packageInfo.version}
        </p>
        <div className="flex">
          <p className="mr-1">유성고등학교 by 비트코딩 동아리</p>
          <Image
            src="/btc-logo-30.svg"
            alt="비트코딩 로고"
            height="20"
            width="20"
          />
        </div>
        <p className="pt-2 text-sm">&copy;2021 비트코딩</p>
      </div>
    </div>
  );
};

export default Footer;
