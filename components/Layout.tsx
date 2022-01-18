import LayoutProps from "../typings/LayoutProps";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
