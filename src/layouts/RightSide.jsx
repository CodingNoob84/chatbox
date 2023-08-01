"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function RightSide() {
  return (
    <div className="w-2/3 p-2">
      <div className="border flex flex-col h-full rounded-2xl bg-slate-200 ">
        <div className="h-[60px] bg-slate-300 flex items-center p-2">
          <div className="flex flex-row gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm">Karthik</span>
              <span className="text-sm">online</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-row-reverse my-2">
            <div className="w-10 h-full flex flex-col-reverse">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <div className="bg-slate-50 flex items-center px-2 mx-2 w-4/5">
              ia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad
            </div>
          </div>
          <div className="flex flex-row my-2">
            <div className="w-10"></div>
            <div className="bg-slate-50 flex items-center px-2 mx-2 w-4/5">
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad
            </div>
          </div>
          <div className="flex flex-row my-2">
            <div className="w-10">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-slate-50 flex items-center px-2 mx-2 w-4/5">
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad
            </div>
          </div>
        </div>
        <div className=" bg-slate-300">
          <div className="flex flex-row p-4">
            <Input />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
