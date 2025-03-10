import { Editor, EditorContent } from "@tiptap/react";
import styles from "./ChatInput.module.less";
import AiStarsIcon from "@assets/icons/AiStars.svg?react";
import WindowsIcon from "@assets/icons/Windows.svg?react";
import MicrophoneIcon from "@assets/icons/Microphone.svg?react";
import ArrowIcon from "@assets/icons/Arrow.svg?react";

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
      <button className={styles.aiButton}>
        <AiStarsIcon />
      </button>
      <div className={styles.editorContainer}>
        <EditorContent editor={editor} />
      </div>
      <button className={styles.fileButton}>
        <WindowsIcon />
      </button>
      <button className={styles.microphoneButton}>
        <MicrophoneIcon />
      </button>
      <button className={styles.sendButton} onClick={handleSendMessage}>
        Send <ArrowIcon />
      </button>
    </div>
  );
};

export default ChatInput;
