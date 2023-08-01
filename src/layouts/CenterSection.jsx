import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CenterSection() {
  return (
    <div className="flex-1 flex flex-row">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default CenterSection;
