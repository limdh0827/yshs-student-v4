import { useRouter } from "next/router";
import Tabbar from "./Tabbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Tabbar pathname={pathname} />

      <div className="px-3 pb-20">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
