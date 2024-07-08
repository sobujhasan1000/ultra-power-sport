import { useQuery } from "@tanstack/react-query";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

const PopularClass = () => {
  const { data: PopularCls = [], refetch } = useQuery(
    ["approved"],
    async () => {
      const res = await fetch(
        "https://ultra-sport-server.vercel.app/classes/approved"
      );
      //   return res.json();
      const responseData = await res.json();
      return responseData.slice(0, 8);
    }
  );
  console.log(PopularCls);
  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4 p-4 mx-2">
        Our programe
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2 rounded-md md:mx-8">
        {PopularCls.map((cls) => (
          <div className="card  bg-base-200 shadow-xl image-full">
            <figure data-AOS="zoom-in-down">
              <img src={cls.classPhoto} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{cls.className}</h2>
              {/* <div className="card-actions justify-end mb-1 mt-auto">
                <Link to="classes">
                  <button className="btn bg-slate-500 ">Details</button>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center  items-center ml-auto mr-auto p-4">
        <Link to="classes">
          <button className="btn text-center mx-auto bg-orange-500">
            see Deatails
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClass;
