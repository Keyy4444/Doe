import { Editor } from "@tiptap/react";
import styles from "./Sidebar.module.less";

interface SidebarProps {
  editor: Editor | null;
}

const Sidebar = ({ editor }: SidebarProps) => {
  if (!editor) return null;

  return (
    <div className={styles.sidebar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? styles.active : ""}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? styles.active : ""}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? styles.active : ""}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? styles.active : ""}
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? styles.active : ""}
      >
        {"</>"}
      </button>
    </div>
  );
};

export default Sidebar;
