import Login from "@/components/parts/Login";
import React from "react";

function Header() {
  return (
    <div className="w-full h-[50px] bg-slate-200 flex flex-row items-center justify-between p-2">
      <div>Logo</div>
      <Login />
    </div>
  );
}

export default Header;
