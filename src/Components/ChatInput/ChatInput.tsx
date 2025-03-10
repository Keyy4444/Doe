import { Editor, EditorContent } from "@tiptap/react";
import styles from "./ChatInput.module.less";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  editor: Editor | null;
}

const ChatInput = ({ onSendMessage, editor }: ChatInputProps) => {
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
