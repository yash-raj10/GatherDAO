import React from "react";
import Image from "next/image";

export const Navbar = () => {
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

        <div className="hidden md:flex">
          <a className=" text-white text-xl font-semibold">GatherDAO</a>
        </div>

        <div className="flex-none gap-2 mr-3"></div>
      </div>
    </div>
  );
};
