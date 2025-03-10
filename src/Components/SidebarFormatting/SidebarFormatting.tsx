import { Editor } from "@tiptap/react";
import { formattingOptions } from "../../helpers/sidebarOptions";
import styles from "./SidebarFormatting.module.less";
import cn from "classnames";

interface SidebarFormattingProps {
  editor: Editor | null;
}

export const SidebarFormatting = ({ editor }: SidebarFormattingProps) => {
  if (!editor) return null;

  return (
    <>
      <div className={styles.sidebarFormatting}>
        {formattingOptions.map(({ command, type, icon: Icon }) => (
          <button
            key={type}
            onClick={() => command && command(editor.chain().focus()).run()}
            className={cn(styles.sidebarCell, { [styles.active]: editor.isActive(type) })}
          >
            <Icon />
          </button>
        ))}
      </div>
      <div className={styles.border} />
    </>
  );
};
