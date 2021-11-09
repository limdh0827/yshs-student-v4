import { MdLogout } from "react-icons/md";

const GoogleUser = ({ user, signOut }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={user.photoURL}
        alt={user.displayName}
        width="80"
        height="80"
        className="rounded-full"
      />

      <p>
        {user.email} {user.emailVerified && "(인증됨 ✅)"}
      </p>
      <p>{user.displayName}</p>
      <button
        onClick={() => signOut()}
        className="bg-blue-500  px-3 rounded-full text-white text-sm flex justify-center items-center space-x-1"
      >
        <MdLogout />
        <p>로그아웃</p>
      </button>
    </div>
  );
};

export default GoogleUser;
