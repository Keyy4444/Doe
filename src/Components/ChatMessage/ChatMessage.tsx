import { Message } from "../../types/Message";
import styles from "./ChatMessage.module.less";
import DoeLogoIcon from "@assets/icons/DoeLogo.svg?react";
import cn from "classnames";

interface ChatMessageProps {
  message: Message;
  prevRole?: "user" | "ai";
}

const ChatMessage = ({ message, prevRole }: ChatMessageProps) => {
  const isAI = message.role === "ai";
  const containsCode = message.content.includes("<code>");

  return (
    <div
      className={cn(styles.messageWrapper, {
        [styles.aiMessageWrapper]: isAI,
        [styles.userMessageWrapper]: !isAI,
      })}
    >
      {isAI && prevRole !== "ai" && (
        <div className={styles.logoIcon}>
          <DoeLogoIcon />
        </div>
      )}
      <div
        className={cn(styles.message, {
          [styles.aiMessage]: isAI,
          [styles.userMessage]: !isAI,
          [styles.messageWithCodeBlock]: containsCode,
        })}
        dangerouslySetInnerHTML={{ __html: message.content }}
      />
    </div>
  );
};

export default ChatMessage;
