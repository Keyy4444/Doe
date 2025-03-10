import { actionOptions } from "../../helpers/sidebarOptions";
import styles from "./SidebarActions.module.less";

export const SidebarActions = () => {
  return (
    <>
      <div className={styles.sidebarActions}>
        {actionOptions.map(({ id, icon: Icon }) => (
          <button className={styles.sidebarCell} key={id} disabled>
            <Icon />
          </button>
        ))}
      </div>
      <div className={styles.border} />
    </>
  );
};
