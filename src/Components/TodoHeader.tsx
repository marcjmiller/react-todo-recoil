import React from "react";

export const TodoHeader = () => (
  <div
    className={
      "flex flex-row justify-between items-end px-1 font-thin border-gray-700  border-b text-xs text-gray-600 uppercase"
    }
  >
    <span className={"w-64"}>Todo Text</span>
    <span className={"w-16 text-center"}>Complete</span>
    <span className={"w-16 text-center"}>Archive</span>
    <span className={"w-16 text-right"}>Owner</span>
  </div>
);
