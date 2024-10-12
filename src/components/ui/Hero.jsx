"use client";
import React, { useState } from "react";
import { WavyBackground } from "../ui/wavy-background";
import { Cover } from "@/components/ui/cover";

const Hero = ({ titleData, createEvent }) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    price: "",
    deadline: "",
    no_of_seats: "",
    location: "",
    typee: "",
  });

  const createNewEvent = async (e) => {
    e.preventDefault();
    try {
      const data = await createEvent(event);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WavyBackground
      backgroundFill=""
      containerClassName=""
      className=" mx-auto py-40 "
    >
      <div className="  flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <div className=" w-1/2 text-white">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b  text-white">
            Meet, Connect & Volenteer on the
            <Cover>Fastest Blockchain</Cover> with GatherDAO
          </h1>
        </div>
        <div className="text-white md:w-1/2 border-2 p-3 rounded-2xl  m-2 bg-white bg-opacity-35 ">
          <h1 className=" font-bold text-2xl text-center py-2">{titleData}</h1>
          <form
          //    onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) => setEvent({ ...event, title: e.target.value })}
                type="text"
                id="title"
                name="title"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="title"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Title
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) =>
                  setEvent({ ...event, description: e.target.value })
                }
                type="text"
                id="description"
                name="description"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="description"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Description
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) => setEvent({ ...event, price: e.target.value })}
                type="text"
                id="price"
                name="price"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="price"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Price
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) =>
                  setEvent({ ...event, deadline: e.target.value })
                }
                type="date"
                id="deadline"
                name="deadline"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="deadline"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Deadline
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) =>
                  setEvent({ ...event, no_of_seats: e.target.value })
                }
                type="text"
                id="no_of_seats"
                name="no_of_seats"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="no_of_seats"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                No of Seats.
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) =>
                  setEvent({ ...event, location: e.target.value })
                }
                type="text"
                id="location"
                name="location"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="location"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Location
              </label>
            </div>

            <div className="w-full  relative mt-2 ">
              <input
                onChange={(e) => setEvent({ ...event, typee: e.target.value })}
                type="text"
                id="typee"
                name="typee"
                placeholder=" "
                required
                className={`[&:required:invalid:not(:focus)]:border-red-500 rounded-xl peer  w-full p-5  bg-white/10 border-2  outline-none transition  disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-black focus text-green-900 font-semibold`}
              />
              <label
                htmlFor="location"
                className={`absolute text-base duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-black`}
              >
                Type
              </label>
            </div>

            <div className=" flex justify-center items-center">
              <button
                onClick={(e) => createNewEvent(e)}
                type="submit"
                className="text-center border-2 py-2 px-3 mt-4 rounded-xl bg-black bg-opacity-45"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
