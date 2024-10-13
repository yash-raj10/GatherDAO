"use client";
import React, { useEffect, useContext, useState } from "react";
import { GatherDAOContext } from "../../../Context/GatherDAO";
import Hero from "./Hero";
import Card from "./Card";

const Middle = () => {
  const {
    titleData,
    // currentAccount,
    getEvents,
    createEvent,
    buyTicket,
    getUserEvents,
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

  // Buy tickets
  const [openModel, setOpenModel] = useState(false);
  const [buyEvent, setBuyEvent] = useState();

  // console.log(buy);

  return (
    <div className="text-white">
      {/* <Hero titleData={titleData} createEvent={createEvent} /> */}

      <Card
        title="All Listed Events"
        allEvents={allEvents}
        setOpenModel={setOpenModel}
        setBuy={setBuyEvent}
      />

      <Card
        title="Your Listed Events"
        allEvents={userEvents}
        setOpenModel={setOpenModel}
        setBuy={setBuyEvent}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          buy={buyEvent}
          buyFunction={buyTicket}
        />
      )}
    </div>
  );
};

export default Middle;
