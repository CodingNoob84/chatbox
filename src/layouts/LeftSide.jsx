"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

function LeftSide() {
  return (
    <div className="w-1/3 p-2">
      <div className="border flex flex-col h-full rounded-2xl">
        <Tabs defaultValue="account" className="bg-slate-200 h-full">
          <TabsList className="grid w-full grid-cols-2 h-[60px] bg-slate-200">
            <TabsTrigger value="account" className="h-[40px]">
              Friends
            </TabsTrigger>
            <TabsTrigger value="password" className="h-[40px]">
              Global
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="flex flex-row bg-slate-50 gap-4 p-2 m-1">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>Karthik</div>
            </div>
            <div className="flex flex-row bg-slate-50 gap-4 p-2 m-1">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>Karthik</div>
            </div>
          </TabsContent>
          <TabsContent value="password">Global people</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default LeftSide;
