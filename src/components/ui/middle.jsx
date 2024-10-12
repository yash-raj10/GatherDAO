"use client";
import React, { useEffect, useContext, useState } from "react";
import { GatherDAOContext } from "../../../Context/GatherDAO";
import Hero from "./Hero";

const Middle = () => {
  const {
    titleData,
    currentAccount,
    createEvent,
    getEvents,
    getUserEvents,
    buyTicket,
    connectWallet,
  } = useContext(GatherDAOContext);

  const [allEvents, setAllEvents] = useState();
  const [userEvents, setUserEvents] = useState();

  useEffect(() => {
    const getEventsData = getEvents();
    const userEventsData = getUserEvents();

    return async () => {
      const allData = await getEventsData;
      const userData = await userEventsData;
      setAllEvents(allData);
      setUserEvents(userData);
    };
  }, []);

  return (
    <div className="text-white">
      {/* <Hero titleData={titleData} createEvent={createEvent} /> */}
    </div>
  );
};

export default Middle;
