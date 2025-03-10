import styles from "./Sidebar.module.less";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.sidebarBtn}>B</button>
      <button className={styles.sidebarBtn}>I</button>
      <button className={styles.sidebarBtn}>U</button>
      <button className={styles.sidebarBtn}>S</button>
      <button className={styles.sidebarBtn}>{"</>"}</button>
    </div>
  );
};
