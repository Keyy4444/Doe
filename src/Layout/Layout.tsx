import { ReactNode } from "react";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import styles from "./Layout.module.less";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
