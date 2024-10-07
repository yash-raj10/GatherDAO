"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function Button({ text }) {
  return (
    <div className=" flex justify-center text-center ">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="  bg-indigo-600 bg-opacity-25 text-white  flex items-center space-x-2 "
      >
        <span className="text-xl">{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
