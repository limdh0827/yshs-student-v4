import { useRouter } from "next/router";
import Tabbar from "./Tabbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Header pathname={pathname} />
      <Tabbar pathname={pathname} />

      <div className="p-5 pb-24">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
