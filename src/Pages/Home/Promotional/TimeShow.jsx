import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TimeShow = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className=" mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-around mx-4 bg-red-200 p-4 rounded-lg shadow-lg ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl font-bold my-6">
            Don’t Miss the First Day <br /> of Summer Camp!
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
          <div className="bg-orange-300 my-4 p-4 rounded-xl text-center shadow-md">
            <h1 className="text-lg font-semibold">Days</h1>
            <p className="text-4xl lg:text-6xl font-bold">
              {timeLeft.days || "0"}
            </p>
          </div>
          <div className="bg-orange-300 my-4 p-4 rounded-xl text-center shadow-md">
            <h1 className="text-lg font-semibold">Hours</h1>
            <p className="text-4xl lg:text-6xl font-bold">
              {timeLeft.hours || "0"}
            </p>
          </div>
          <div className="bg-orange-300 my-4 p-4 rounded-xl text-center shadow-md">
            <h1 className="text-lg font-semibold">Minutes</h1>
            <p className="text-4xl lg:text-6xl font-bold">
              {timeLeft.minutes || "0"}
            </p>
          </div>
          <div className="bg-orange-300 my-4 p-4 rounded-xl text-center shadow-md">
            <h1 className="text-lg font-semibold">Seconds</h1>
            <p className="text-4xl lg:text-6xl font-bold">
              {timeLeft.seconds || "0"}
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start my-4">
            <Link to="/classes">
              <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Select Course
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeShow;
