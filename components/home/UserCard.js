import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { format as fnsFormat, getDay } from "date-fns";
import ko from "date-fns/locale/ko";
import { MdLogin, MdOpenInNew } from "react-icons/md";
import Loading from "react-loading";

const days = ["일", "월", "화", "수", "목", "금", "토"];

const UserCard = () => {
  const { user, loading, signIn, signOut } = useAuth();

  return (
    <div className="mx-auto w-full p-5 rounded-lg flex justify-between bg-gray-50">
      <div className="flex justify-between items-center">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loading type="spokes" color="#000" width="40px" className="pt-3" />
          </div>
        ) : user ? (
          <>
            <div className="mr-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={user.photoURL}
                alt={user.displayName}
                height="43"
                width="43"
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="text-3xl">{user.displayName.replace(/\d+/g, "")}</p>
              <p className="text-sm my-auto px-1 bg-blue-200 rounded-md">
                {/\d/.test(user.displayName)
                  ? `${user.displayName.slice(0, 1)}학년 ${user.displayName
                      .slice(1, 3)
                      .replace(/^0+/, "")}반`
                  : "선생님"}
              </p>
            </div>
          </>
        ) : (
          <div>
            <p className="text-lg">로그인이 필요합니다.</p>
            <Link href="/user">
              <a>
                <button className="flex justify-center items-center space-x-1 text-xl px-2 bg-blue-300 rounded-md">
                  <MdLogin />
                  <p>로그인하기</p>
                </button>
              </a>
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col items-end justify-center">
        <p className="text-lg">
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
