import React, { useState } from "react";
import styles from "./ChatBotStyles.module.css";

const ChatBotApp = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! What can I do for you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    // Add user's message to the chat
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    // Clear input field
    setUserInput("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm not sure I understand. Can you rephrase?";
      if (userInput.toLowerCase().includes("create ticket")) {
        botResponse = "Okay, let's get started then! 🚀 What's your name?";
      } else if (userInput.toLowerCase() === "tom") {
        botResponse = "Thanks, Tom! Your ticket has been created.";
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    }, 1000);
  };

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatHeader}>Ticket Bot</div>
      <div className={styles.chatBody}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.chatMessage} ${
              msg.sender === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBotApp;
