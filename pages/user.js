import GoogleButton from "react-google-button";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const { user, signIn, signOut } = useAuth();

  if (!user) {
    return (
      <div className="h-96 flex flex-col justify-center items-center">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="mb-5 text-left">
            <p className="text-4xl mb-3">로그인하기</p>
            <p>🚨 학교에서 발급받은 계정으로 로그인해주세요.</p>
            <p className="text-sm text-gray-900">
              예시: 21_XXXXX@yshs.djsch.kr
            </p>
          </div>

          {/* <p>{JSON.stringify(user, null, 2)}</p> */}

          <GoogleButton
            onClick={() => signIn()}
            type="dark"
            label="로그인하기"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
};

export default User;
