"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BiSolidLogInCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

function Login({ session }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-2">
        <div className="text-sm flex flex-col">
          <span>{session?.user?.name}</span>
          <span>{session?.user?.email}</span>
        </div>
        <div className="w-10 h-10 rounded-full">
          <Avatar>
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center items-center">
          <BiSolidLogInCircle
            size={30}
            className="hover:scale-150"
            onClick={() => signOut()}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
