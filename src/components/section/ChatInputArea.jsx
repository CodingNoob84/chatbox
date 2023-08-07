import { CreateMessage, GetAllMessages } from "@/lib/dbservices";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import ChatMsgArea from "./ChatMsgArea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function ChatInputArea({ friendShipId, userId, ChatUserId }) {
  console.log(friendShipId);
  const inputref = useRef();

  const {
    data: messages,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["messages", friendShipId],
    queryFn: () => GetAllMessages(friendShipId),
  });

  console.log(messages);

  const mutation = useMutation(CreateMessage, {
    onSuccess: () => {
      refetch();
      inputref.current.value = ""; // Clear the input field after successful send
    },
    onError: (error) => {
      console.error("Error sending message:", error);
    },
  });

  const handleSend = async (id) => {
    const data = {
      msgtype: "text",
      content: inputref.current.value,
      status: "sent",
      senderId: userId,
      receiverId: ChatUserId,
      friendshipId: id,
    };
    mutation.mutate(data);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === "Enter") {
      const data = {
        msgtype: "text",
        content: inputref.current.value,
        status: "sent",
        senderId: userId,
        receiverId: ChatUserId,
        friendshipId: id,
      };
      console.log(data);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex h-full justify-center items-center">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-screen md:h-[363px] p-4 overflow-y-auto">
            <div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    you are friends now
                  </span>
                </div>
              </div>
            </div>
            <ChatMsgArea
              messages={messages}
              userId={userId}
              ChatUserId={ChatUserId}
            />
          </div>
          <div className=" bg-slate-300 flex-col-reverse">
            <div className="flex flex-row p-4">
              <Input
                ref={inputref}
                onKeyPress={(e) => handleKeyPress(e, friendShipId)}
              />
              <Button onClick={() => handleSend(friendShipId)}>Send</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ChatInputArea;
