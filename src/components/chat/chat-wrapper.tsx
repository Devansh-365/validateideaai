"use client";

import React, { useState } from "react";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function ChatWrapper() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    const response = await axios.post(
      "https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/businessreport",
      {
        messages: [...messages, { role: "user", content: inputMessage }],
      }
    );

    // console.log("RESPONSE : ", response.data.generatedText);
    const userMessage: Message = { text: inputMessage, sender: "user" };
    const botResponse: Message = {
      text: response.data.generatedText,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage("");
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between gap-2">
      <div className="flex-1 justify-between flex flex-col">
        <ChatMessages messages={messages} />
      </div>
      <ChatInput
        isDisabled={isLoading}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        onSend={sendMessage}
      />
    </div>
  );
}
