import React, { useState, useEffect, Children } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { GatherDAOABI, GatherDAOAddress } from "./contants";

// Fetching Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(GatherDAOAddress, GatherDAOABI, signerOrProvider);

export const GatherDAOContext = React.createContext();

export const GatherDAOProvider = ({ Children }) => {
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

  const getEvents = async () => {};
};
