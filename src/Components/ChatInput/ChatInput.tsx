import { useEffect } from "react";
import { Editor, EditorContent } from "@tiptap/react";
import styles from "./ChatInput.module.less";
import AiStarsIcon from "@assets/icons/AiStars.svg?react";
import WindowsIcon from "@assets/icons/Windows.svg?react";
import MicrophoneIcon from "@assets/icons/Microphone.svg?react";
import ArrowIcon from "@assets/icons/Arrow.svg?react";
import cn from "classnames";

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

  useEffect(() => {
    if (!editor) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleSendMessage();
      }
    };

    editor.view.dom.addEventListener("keydown", handleKeyDown);

    return () => {
      editor.view.dom.removeEventListener("keydown", handleKeyDown);
    };
  }, [editor]);

  return (
    <div
      className={cn(styles.chatInputWrapper, {
        [styles.active]: editor?.isFocused,
      })}
    >
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
    </div>
  );
};

export default ChatInput;
