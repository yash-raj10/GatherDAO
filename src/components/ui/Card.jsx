import React from "react";

const Card = ({ allEvents, setOpenModel, setBuy, title }) => {
  console.log(allEvents);

  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.new();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  return (
    <div className="px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5 ">{title}</p>

      <div className="gird gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full ">
        {allEvents?.map((eventt, i) => (
          <div
            onClick={() => (setBuy(eventt), setOpenModel(true))}
            ket={i + 1}
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded-xl"
          >
            <div className="py-5 pl-2">
              <p className="py-5 pl-2">
                <p className=" mb-2 text-xs font-semibold text-gray-600 uppercase">
                  Days Left: {eventt.deadline}
                </p>

                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200
                    hover:text-purple-700
                    "
                >
                  <p className=" text-2xl font-bold leading-5">
                    {eventt.title}
                  </p>
                </a>
                <p className="mb-4 text-gray-700 "> {eventt.description}</p>

                <div className="flex space-x-4">
                  <p className=" font-semibold ">Amount: {eventt.price} ETH</p>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
