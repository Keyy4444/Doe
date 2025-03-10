import { Editor } from "@tiptap/react";
import styles from "./Sidebar.module.less";
import { SidebarGeneral } from "../SidebarGeneral/SidebarGeneral";
import { SidebarFormatting } from "../SidebarFormatting/SidebarFormatting";
import { SidebarActions } from "../SidebarActions/SidebarActions";
import { SidebarProfile } from "../SidebarProfile/SidebarProfile";
import TrashIcon from "@assets/icons/Trash.svg?react";

interface SidebarProps {
  editor: Editor | null;
}

const Sidebar = ({ editor }: SidebarProps) => {
  if (!editor) return null;

  return (
    <div className={styles.sidebar}>
      <SidebarProfile />
      <SidebarGeneral />
      <SidebarFormatting editor={editor} />
      <SidebarActions />
      <div className={styles.trashIcon}>
        <TrashIcon />
      </div>
    </div>
  );
};

export default Sidebar;
