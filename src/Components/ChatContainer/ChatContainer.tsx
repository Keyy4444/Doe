import { useState } from "react";
import styles from "./ChatContainer.module.less";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";
import { useEditor } from "@tiptap/react";
import Sidebar from "../Sidebar/Sidebar";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
  });

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.chatContainer}>
      <Sidebar editor={editor} />
      <div className={styles.chatMain}>
        <ChatHistory messages={messages} />
        <ChatInput editor={editor} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
