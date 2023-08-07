"use client";
import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CenterSection({ userId }) {
  const [chatId, setChatId] = useState("");
  return (
    <div className="flex-1 flex flex-row">
      <LeftSide setChatId={setChatId} userId={userId} />
      <RightSide chatId={chatId} userId={userId} />
    </div>
  );
}

export default CenterSection;
