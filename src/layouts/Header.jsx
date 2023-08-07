import Login from "@/components/section/Login";
import React from "react";

function Header({ session }) {
  return (
    <div className="w-full h-[50px] bg-slate-200 flex flex-row items-center justify-between p-2">
      <div>Logo</div>
      <Login session={session} />
    </div>
  );
}

export default Header;
