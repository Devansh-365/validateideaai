import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  text: string;
  sender: "user" | "bot";
}

type ChatMessagesProps = {
  messages: Message[];
};

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse justify-start gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-end ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`relative flex h-6 w-6 aspect-square items-center justify-center ${
              message.sender === "user" ? "order-2" : "order-1"
            } ${
              message.sender === "user" ? "bg-blue-600" : "bg-zinc-200"
            } rounded-sm`}
          >
            {message.sender === "user" ? (
              <User className={`fill-zinc-200 text-zinc-200 h-3/4 w-3/4`} />
            ) : (
              <Image src="/logo.svg" width={28} height={28} alt="logo" />
            )}
          </div>
          <div
            className={`flex flex-col space-y-2 text-base max-w-md mx-2 ${
              message.sender === "user" ? "order-1" : "order-2"
            } items-start`}
          >
            <div
              className={`px-4 py-2 rounded-lg inline-block bg-${
                message.sender === "user" ? "blue-600" : "zinc-200"
              } ${
                message.sender === "user" ? "text-white" : "text-black"
              } rounded-br-none`}
            >
              <ReactMarkdown
                components={{
                  h1: ({ node, children }) => {
                    return <h1 className="text-2xl">{children}</h1>;
                  },
                  h3: ({ node, children }) => {
                    return <h3 className="text-lg">{children}</h3>;
                  },
                  h2: ({ node, children }) => {
                    return <h2 className="text-xl">{children}</h2>;
                  },
                  h4: ({ node, children }) => {
                    return <h2 className="text-xl">{children}</h2>;
                  },
                  h5: ({ node, children }) => {
                    return <h2 className="text-xl">{children}</h2>;
                  },
                }}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
