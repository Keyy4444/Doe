import styles from "./SidebarGeneral.module.less";
import { generalOptions } from "../../helpers/sidebarOptions";

export const SidebarGeneral = () => {
  return (
    <>
      <div className={styles.sidebarGeneral}>
        {generalOptions.map(({ id, icon: Icon }) => (
          <button className={styles.sidebarCell} key={id} disabled>
            <Icon />
          </button>
        ))}
      </div>
      <div className={styles.border} />
    </>
  );
};
