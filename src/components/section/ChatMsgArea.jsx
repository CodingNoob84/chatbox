"use client";
import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDateTime } from "@/helper/timehelper";

function ChatMsgArea({ messages, userId, ChatUserId }) {
  console.log(messages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      {messages.map((msg) =>
        msg.senderId === userId ? (
          <div key={msg.id} className="flex flex-row-reverse my-2">
            <div className="bg-slate-50 flex flex-col rounded-md  mx-2 w-3/5">
              <div className="text-left px-2 rounded-md">{msg.content}</div>
              <div className="text-[12px] px-2 bg-slate-100 flex flex-row-reverse">
                {formatDateTime(msg.updatedAt)} {msg.status}
              </div>
            </div>
          </div>
        ) : (
          <div key={msg.id} className="flex flex-row my-2">
            <div className="bg-slate-50 flex flex-col rounded-md  mx-2 w-3/5">
              <div className="text-left px-2 rounded-md">{msg.content}</div>
              <div className="text-[12px] px-2 bg-slate-100 flex flex-row-reverse">
                {formatDateTime(msg.updatedAt)} {msg.status}
              </div>
            </div>
          </div>
        )
      )}
      <div ref={messagesEndRef} />
    </>
  );
}

export default ChatMsgArea;
