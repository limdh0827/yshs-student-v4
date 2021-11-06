import Link from "next/link";
import Image from "next/image";
import { format as fnsFormat, getDay } from "date-fns";
import ko from "date-fns/locale/ko";
import { MdOpenInNew } from "react-icons/md";

const days = ["일", "월", "화", "수", "목", "금", "토"];

const UserCard = () => {
  return (
    <div className="mx-auto w-full p-5 rounded-lg flex justify-between bg-gray-50">
      <div className="flex justify-between items-center">
        <div className="mr-3">
          <Image src="/logo.png" alt="임도협" height="43" width="43" />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl">임도협</p>
          <p className="text-sm my-auto px-1 bg-blue-200 rounded-md">
            1학년 3반
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center">
        <p className="text-xl">
          {fnsFormat(new Date(), "MM월 dd일", {
            locale: ko,
          })}{" "}
          {days[getDay(new Date())]}요일
        </p>

        <Link href="https://yshs.djsch.kr/main.do">
          <a target="_blank">
            <div className="flex justify-center items-center bg-gray-300 mt-1 px-2 rounded-full">
              <p className="text-sm mr-1">페이지 열기</p>
              <MdOpenInNew />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
