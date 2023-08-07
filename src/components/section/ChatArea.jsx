"use client";
import React, { useRef } from "react";
import FriendReqCard from "./FriendReqCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { GetAllMessages, getFRStatus } from "@/lib/dbservices";
import ChatMsgArea from "./ChatMsgArea";
import { ScrollArea } from "../ui/scroll-area";
import ChatInputArea from "./ChatInputArea";

function ChatArea({ ChatUserId, ChatUserName, userId }) {
  const {
    data: FRStatus,
    isLoading: isFRStatusLoading,
    refetch,
  } = useQuery({
    queryKey: ["frstatus", userId, ChatUserId],
    queryFn: () => getFRStatus(userId, ChatUserId),
  });

  if (isFRStatusLoading) {
    return (
      <div className="flex h-full justify-center items-center">
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <>
      {!isFRStatusLoading &&
      FRStatus?.length > 0 &&
      FRStatus[0].type === "accepted" ? (
        <ChatInputArea
          friendShipId={FRStatus[0].id}
          userId={userId}
          ChatUserId={ChatUserId}
        />
      ) : (
        <div className="flex flex-col h-full p-4">
          <FriendReqCard
            ChatUserId={ChatUserId}
            ChatUserName={ChatUserName}
            userId={userId}
            FRStatus={FRStatus}
            refetch={refetch}
          />
        </div>
      )}
    </>
  );
}

export default ChatArea;
