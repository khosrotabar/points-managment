import { FC } from "react";
import Header from "../header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default Layout;
