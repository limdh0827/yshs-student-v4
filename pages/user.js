import { useAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
import Loading from "react-loading";
import GoogleUser from "../components/user/GoogleUser";
import AllergiesForm from "../components/user/AllergiesForm";

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
      <div className="flex flex-col justify-center items-center space-y-8">
        <GoogleUser user={user} signOut={signOut} />

        <AllergiesForm uid={user.uid} />
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
