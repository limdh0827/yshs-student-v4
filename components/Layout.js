import Tabbar from "./Tabbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {children}

      <Tabbar pathname={pathname} />
    </>
  );
};

export default Layout;
