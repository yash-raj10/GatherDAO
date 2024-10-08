"use client";
import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { GatherDAOABI, GatherDAOAddress } from "./contants";

// Fetching Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(GatherDAOAddress, GatherDAOABI, signerOrProvider);

export const GatherDAOContext = React.createContext();

export const GatherDAOProvider = ({ children }) => {
  const titleData = "GatherDAO contract";
  const [currentAccount, setCurrentAccount] = useState("");

  const createEvent = async (eventt) => {
    const {
      title,
      description,
      price,
      deadline,
      no_of_seats,
      location,
      typee,
    } = eventt;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    // const provider = new ethers.providers.Web3Provider(connection);
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    console.log(currentAccount);
    try {
      const transaction = await contract.createEvent(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(price, 18),
        new Date(deadline).getTime(),
        ethers.utils.parseUnits(no_of_seats, 18),
        location,
        typee
      );
      await transaction.wait();

      console.log("contract calls success", transaction);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getEvents = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const events = await contract.getEvents();

    const parsedEvents = events.map((eventt, i) => ({
      organizer: eventt.organizer,
      title: eventt.title,
      description: eventt.description,
      price: ethers.utils.formatEther(eventt.price.toString()),
      deadline: eventt.deadline.toNumber(),
      no_of_seats: eventt.no_of_seats.toNumber(),
      location: eventt.location,
      typee: eventt.typee,
      pId: i,
    }));

    return parsedEvents;
  };

  const getUserEvents = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const allEvents = await contract.getEvents();

    const accounts = await window.ethereum.request({
      method: "eth_account",
    });
    const currentUser = accounts[0];

    const filterEvents = allEvents.filter(
      (eventt) =>
        eventt.organizer === "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    );

    const userData = filterEvents.map((eventt, i) => ({
      organizer: eventt.organizer,
      title: eventt.title,
      description: eventt.description,
      price: ethers.utils.formatEther(eventt.price.toString()),
      deadline: eventt.deadline.toNumber(),
      no_of_seats: eventt.no_of_seats.toNumber(),
      location: eventt.location,
      typee: eventt.typee,
      pId: i,
    }));

    return userData;
  };

  const buyTicket = async (pId, price) => {
    const web3modal = Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const eventData = await contract.buyTickets(pId, {
      value: ethers.utils.parseEther(price),
    });

    await eventData.wait();
    location.reload();

    return eventData;
  };

  // check connection
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return setOpenError(true), setError("Install MM");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no account found");
      }
    } catch (error) {
      console.log("something wrong while connecting to wallet");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  // connect wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("install MM");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("error while connecting to wallet");
    }
  };

  return (
    <GatherDAOContext.Provider
      value={{
        titleData,
        currentAccount,
        createEvent,
        getEvents,
        getUserEvents,
        buyTicket,
        connectWallet,
      }}
    >
      {children}
    </GatherDAOContext.Provider>
  );
};
