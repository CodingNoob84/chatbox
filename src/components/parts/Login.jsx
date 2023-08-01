"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BiSolidLogInCircle } from "react-icons/bi";

function Login() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-2">
        <div className="text-sm flex flex-col">
          <span>Karthik kumar</span>
          <span>karthithelearner@gmail.com</span>
        </div>
        <div className="w-10 h-10 rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-center items-center">
          <BiSolidLogInCircle size={30} className="hover:scale-150" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
