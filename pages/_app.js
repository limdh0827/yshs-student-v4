import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext";
import { isIOS, isMobileSafari, isAndroid } from "react-device-detect";
import { useEffect, useState } from "react";
import Install from "./install";
import Unavailable from "./unavailable";

const MyApp = ({ Component, pageProps }) => {
  const [standalone, setStandalone] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setStandalone(true);
      } else {
        setStandalone(false);
      }
    }
  }, []);

  return (
    <AuthProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>유성고등학교</title>
      </Head>

      {standalone ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (isIOS && isMobileSafari) || isAndroid ? (
        <Install />
      ) : (
        <Unavailable />
      )}
    </AuthProvider>
  );
};

export default MyApp;
