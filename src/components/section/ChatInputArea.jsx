import { CreateMessage, GetAllMessages } from "@/lib/dbservices";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import ChatMsgArea from "./ChatMsgArea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formatDateTime } from "@/helper/timehelper";

function ChatInputArea({ friendShipId, userId, ChatUserId }) {
  console.log(friendShipId);
  const inputref = useRef();
  const scrollContainerRef = useRef();

  const {
    data,
    refetch,
    isSuccess,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["messages", friendShipId],
    queryFn: ({ pageParam = 1 }) => GetAllMessages(friendShipId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length === 5 ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  console.log(data);
  const handleLoadMore = () => {
    fetchNextPage();
  };

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

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <>
      {status === "loading" ? (
        <div className="flex h-full justify-center items-center">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <div
            ref={scrollContainerRef}
            className="flex flex-col h-screen md:h-[363px] p-4 overflow-y-auto"
          >
            {!hasNextPage && !hasNextPage && (
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
            )}
            {hasNextPage && (
              <div className="flex justify-center items-center cursor-pointer my-2">
                <div
                  className="border bg-white px-2"
                  onClick={handleLoadMore}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? "Loading..." : "Load More"}
                </div>
              </div>
            )}
            <div className="flex flex-col-reverse">
              {data.pages.map((page, i) => (
                <ChatMsgArea
                  messages={page}
                  userId={userId}
                  ChatUserId={ChatUserId}
                />
              ))}
              {/* {data.pages[0].map((msg) =>
                msg.senderId === userId ? (
                  <div key={msg.id} className="flex flex-row-reverse my-2">
                    <div className="bg-slate-50 flex flex-col rounded-md  mx-2 w-3/5">
                      <div className="text-left px-2 rounded-md">
                        {msg.content}
                      </div>
                      <div className="text-[12px] px-2 bg-slate-100 flex flex-row-reverse">
                        {formatDateTime(msg.updatedAt)} {msg.status}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex flex-row my-2">
                    <div className="bg-slate-50 flex flex-col rounded-md  mx-2 w-3/5">
                      <div className="text-left px-2 rounded-md">
                        {msg.content}
                      </div>
                      <div className="text-[12px] px-2 bg-slate-100 flex flex-row-reverse">
                        {formatDateTime(msg.updatedAt)} {msg.status}
                      </div>
                    </div>
                  </div>
                )
              )} */}
            </div>

            {/* {isSuccess && (
              <ChatMsgArea
                messages={data.pages[0]}
                userId={userId}
                ChatUserId={ChatUserId}
              />
            )} */}
            {/* <ChatMsgArea
              messages={messages}
              userId={userId}
              ChatUserId={ChatUserId}
            /> */}
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
