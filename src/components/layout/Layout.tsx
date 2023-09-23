import { FC } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <Sidebar />
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default Layout;
