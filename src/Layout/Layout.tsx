import { ReactNode } from "react";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import styles from "./Layout.module.less";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
