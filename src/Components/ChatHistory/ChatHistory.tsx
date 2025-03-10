import styles from "./ChatHistory.module.less";

interface ChatHistoryProps {
  messages: string[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  return (
    <div className={styles.chatMessages}>
      {messages.map((msg, index) => (
        <div key={index} className={styles.chatMessage} dangerouslySetInnerHTML={{ __html: msg }} />
      ))}
    </div>
  );
};

export default ChatHistory;
