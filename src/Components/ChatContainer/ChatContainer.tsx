import { useState } from "react";
import styles from "./ChatContainer.module.less";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className={styles.chatContainer}>
      <ChatHistory messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
