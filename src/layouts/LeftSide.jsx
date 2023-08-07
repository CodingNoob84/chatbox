"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllUsers } from "@/lib/dbservices";
import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";

function LeftSide({ setChatId, userId }) {
  const [tab, setTab] = useState("friends");
  const {
    data: allUsers,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getAllUsers(userId),
  });
  //console.log(allUsers);
  return (
    <div className="hidden md:block md:w-1/3 p-2">
      <div className="border flex flex-col h-full rounded-2xl">
        <div className="bg-slate-200 h-full flex flex-col">
          <div className="grid grid-cols-2 gap-2 h-[60px] bg-slate-200">
            <div
              className={`h-[40px] m-2 p-2 text-center cursor-pointer ${
                tab === "friends"
                  ? "bg-white rounded-md shadow-md transition duration-300 ease-in-out"
                  : ""
              }`}
              onClick={() => setTab("friends")}
            >
              Friends
            </div>
            <div
              className={`h-[40px] m-2 p-2 text-center cursor-pointer ${
                tab === "global"
                  ? "bg-white rounded-md shadow-md transition duration-300 ease-in-out"
                  : ""
              }`}
              onClick={() => setTab("global")}
            >
              Global
            </div>
          </div>
          <div className="flex-1">
            {tab === "friends" && (
              <div>
                {!isLoading &&
                  allUsers?.friends.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-row bg-slate-50 gap-4 p-2 m-1 cursor-pointer hover:bg-slate-100"
                      onClick={() => setChatId(user.id)}
                    >
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={user.image} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>{user.name}</div>
                    </div>
                  ))}{" "}
              </div>
            )}
            {tab === "global" && (
              <div>
                {!isLoading &&
                  allUsers?.globals.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-row bg-slate-50 gap-4 p-2 m-1 cursor-pointer hover:bg-slate-100"
                      onClick={() => setChatId(user.id)}
                    >
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={user.image} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>{user.name}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* <Tabs defaultValue="account" className="bg-slate-200 h-full">
          <TabsList className="grid w-full grid-cols-2 h-[60px] bg-slate-200">
            <TabsTrigger value="account" className="h-[40px]">
              Friends
            </TabsTrigger>
            <TabsTrigger value="password" className="h-[40px]">
              Global
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            {!isLoading &&
              allUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-row bg-slate-50 gap-4 p-2 m-1"
                  onClick={() => setChatId(user.id)}
                >
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>{user.name}</div>
                </div>
              ))} 
          </TabsContent>
          <TabsContent value="password">Global people</TabsContent>
        </Tabs> */}
      </div>
    </div>
  );
}

export default LeftSide;
