import { useState } from "react";
import { Message } from "../types/Message";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (role: "user" | "ai", content: string) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const handleUserMessage = (message: string) => {
    addMessage("user", message);

    // simulating ai responses
    const messageCount = messages.length + 1;

    console.log("messageCount", messageCount);

    if (messageCount === 1) {
      setTimeout(() => {
        addMessage("ai", "Hey, John Smith, I'm Doe!");
        addMessage("ai", "Let me introduce my main functionality.");
      }, 500);
    } else if (messageCount === 4) {
      setTimeout(() => {
        addMessage(
          "ai",
          `Here's a simple project idea: a Task Manager command-line application in Python. It will allow you to add, view, and delete tasks. In the structure, we'll be able to add and view all tasks, delete tasks by number, and mark tasks as completed. <br/><br/>We will write this code completely in Python. <br/><br/>The Python code for the deletion function is as follows: <pre><code>def delete_element(my_list, element):  
            """Removes the first occurrence of the element from the list."""  
            try:  
                my_list.remove(element)  
                return my_list  
            except ValueError:  
                return
            </code></pre>`
        );
      }, 1000);
    } else {
      setTimeout(() => {
        addMessage(
          "ai",
          `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa possimus sed magni culpa, illo deserunt qui saepe molestiae perspiciatis inventore tempore ut ipsum officiis reprehenderit reiciendis, vitae eveniet ratione excepturi?`
        );
      }, 500);
    }
  };

  return { messages, handleUserMessage };
};
