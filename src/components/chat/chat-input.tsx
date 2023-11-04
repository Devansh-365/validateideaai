"use client";

import { Send } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ChatInputProps {
  isDisabled?: boolean;
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  isDisabled,
  inputMessage,
  setInputMessage,
  onSend,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = () => {
    if (inputMessage) {
      onSend();
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-4xl xl:max-w-5xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <div className="relative">
              <Textarea
                rows={1}
                ref={textareaRef}
                // maxRows={4}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                    textareaRef.current?.focus();
                  }
                }}
                disabled={isDisabled}
                placeholder="Enter your question..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="resize-none pr-12 shadow-md shadow-blue-600/40 text-base py-3 border dark:border-zinc-700 border-zinc-200 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              />

              <Button
                // disabled={isLoading || isDisabled}
                className="absolute bottom-3 right-[8px] bg-blue-600 rounded-md"
                aria-label="send message"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
