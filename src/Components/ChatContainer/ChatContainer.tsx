import styles from "./ChatContainer.module.less";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";
import { useEditor } from "@tiptap/react";
import Sidebar from "../Sidebar/Sidebar";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import { useChat } from "../../hooks/useChat";

const ChatContainer = () => {
  const { messages, handleUserMessage } = useChat();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Ask Doe anything you'd like about the world...",
      }),
    ],
    content: "",
  });

  return (
    <div className={styles.chatContainer}>
      <Sidebar editor={editor} />
      <div className={styles.chatMain}>
        <ChatHistory messages={messages} />
        <ChatInput editor={editor} onSendMessage={handleUserMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
