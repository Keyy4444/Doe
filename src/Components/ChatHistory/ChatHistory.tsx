import { memo } from "react";
import { Message } from "../../types/Message";
import styles from "./ChatHistory.module.less";
import ChatMessage from "../ChatMessage/ChatMessage";

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className={styles.chatHistoryContainer}>
      <div className={styles.chatHistoryContent}>
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg}
            prevRole={index > 0 ? messages[index - 1]?.role : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ChatHistory);
