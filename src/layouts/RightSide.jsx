"use client";
import ChatArea from "@/components/section/ChatArea";
import FriendReqCard from "@/components/section/FriendReqCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { getUser } from "@/lib/dbservices";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function RightSide({ chatId, userId }) {
  const {
    data: chatuser,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ["user", chatId],
    queryFn: () => getUser(chatId),
    enabled: chatId != "",
  });

  if (chatId === "") {
    return (
      <div className="w-full md:w-2/3 p-2">
        <div className="border flex flex-col h-full rounded-2xl bg-slate-200">
          <div className="flex h-full justify-center items-center">Chat</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-2/3 p-2">
      {isLoading ? (
        <div className="border flex flex-col h-full rounded-2xl bg-slate-200">
          <div className="flex h-full justify-center items-center">
            <div>Loading...</div>
          </div>
        </div>
      ) : (
        <div className="border flex flex-col h-full rounded-2xl bg-slate-200 ">
          <div className="h-[60px] bg-slate-300 flex items-center p-2">
            <div className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src={chatuser.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm">{chatuser.name}</span>
                <span className="text-sm">online</span>
              </div>
            </div>
          </div>

          <ChatArea
            ChatUserId={chatuser.id}
            ChatUserName={chatuser.name}
            userId={userId}
          />
        </div>
      )}
    </div>
  );
}

export default RightSide;
