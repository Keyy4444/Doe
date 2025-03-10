import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./ChatInput.module.less";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const handleSendMessage = () => {
    if (!editor || editor.getHTML().trim() === "<p></p>") return;

    onSendMessage(editor.getHTML());
    editor.commands.clearContent();
  };

  return (
    <div className={styles.chatInput}>
      <div className={styles.editorContainer}>
        <EditorContent editor={editor} />
      </div>
      <button className={styles.sendButton} onClick={handleSendMessage}>
        ➤
      </button>
    </div>
  );
};

export default ChatInput;
