"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { GatherDAOContext } from "../../../Context/GatherDAO";

export const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(GatherDAOContext);

  return (
    <div className="navbar backdrop-blur bg-base-100/30 max-w-7xl border-2 rounded-xl z-50">
      <div className="w-full flex justify-between items-center">
        <div className="px-2">
          <a className=" text-xl ">
            <Image
              src="https://raw.githubusercontent.com/yash-raj10/bookmart/main/public/DEQUIZZ.png"
              height={40}
              width={40}
            />
          </a>
        </div>

        <div className="hidden md:flex pr-1">
          <a className=" text-white text-xl font-semibold">GatherDAO</a>
        </div>

        {!currentAccount && (
          <button
            onClick={() => connectWallet()}
            className="flex-none gap-2 mr-3 text-zinc-300 font-semibold px-3 py-2  rounded-lg bg-pink-600 bg-opacity-60"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};
