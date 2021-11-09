import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const provider = new GoogleAuthProvider();
provider.addScope("email");
provider.addScope("profile");
provider.setCustomParameters({
  hd: "yshs.djsch.kr",
  prompt: "select_account",
});

const AuthContext = createContext({
  user: null,
  loading: Boolean,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const cred = GoogleAuthProvider.credentialFromResult(result);
        const token = cred?.accessToken;
        const user = result.user;
        if (!user.email.endsWith("@yshs.djsch.kr")) {
          auth.signOut();
          deleteUser(user).then(() => {
            alert("학교에서 발급받은 구글 계정으로 로그인해주세요.");
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const userEmail = error.email;
        const cred = GoogleAuthProvider.credentialFromError(error);

        console.error(errorMessage);

        alert(`인증 오류: ${errorMessage}`);
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
