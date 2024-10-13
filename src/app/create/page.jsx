"use client";
import Hero from "@/components/ui/Hero";
import React from "react";
import { GatherDAOContext } from "../../../Context/GatherDAO";
import { useContext } from "react";

const page = () => {
  const { titleData, createEvent } = useContext(GatherDAOContext);

  return (
    <div className="mt-40 md:mt-0">
      <Hero titleData={titleData} createEvent={createEvent} />
    </div>
  );
};

export default page;
