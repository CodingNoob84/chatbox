"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

function LoginSection() {
  return (
    <div className="flex-1 flex flex-row p-2">
      <div className="bg-slate-200 w-full flex flex-col justify-center items-center">
        <div>Login Section</div>
        <Button
          variant="outline"
          className="w-48 h-12 "
          onClick={() => signIn("google")}
        >
          <FaGoogle className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default LoginSection;
