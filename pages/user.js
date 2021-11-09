import { useAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
import Loading from "react-loading";
import GoogleUser from "../components/user/GoogleUser";
import Preferences from "../components/user/Preferences";

const User = () => {
  const { user, loading, signIn, signOut } = useAuth();

  if (loading) {
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        <Loading type="spokes" color="#000" width="50px" />
        <p>로딩 중</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col justify-center items-center space-y-5">
        <GoogleUser user={user} signOut={signOut} />

        <Preferences />

        {/* <table className="table-auto border-collapse border w-full">
          <tbody>
            <tr>
              <th className="border">상태</th>
              <th className="border">로그인 됨 ✅</th>
            </tr>

            <tr>
              <th className="border">계정</th>
              <th className="border">{user.email}</th>
            </tr>

            <tr>
              <th className="border">계정 이름</th>
              <th className="border">{user.displayName}</th>
            </tr>

            <tr>
              <th className="border">알레르기 정보</th>
              <th className="border">
                <button className="bg-yellow-300 rounded-full text-sm px-3">
                  <p>알레르기 설정</p>
                </button>
              </th>
            </tr>

            <tr>
              <th className="border">상태</th>
              <th className="border">로그인 됨 ✅</th>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }

  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="mb-5 text-left">
          <p className="text-4xl mb-3">로그인하기</p>
          <p>🚨 학교에서 발급받은 계정으로 로그인해주세요.</p>
          <p className="text-sm text-gray-900">예시: 21_XXXXX@yshs.djsch.kr</p>
        </div>

        <GoogleButton onClick={() => signIn()} type="dark" label="로그인하기" />
      </div>
    </div>
  );
};

export default User;
