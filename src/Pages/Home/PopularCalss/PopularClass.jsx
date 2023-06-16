import { useQuery } from "@tanstack/react-query";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PopularClass = () => {
  const { data: PopularCls = [], refetch } = useQuery(
    ["approved"],
    async () => {
      const res = await fetch("https://ultra-sport-server.vercel.app/classes/approved");
      //   return res.json();
      const responseData = await res.json();
      return responseData.slice(0, 6);
    }
  );
  console.log(PopularCls);
  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4 bg-violet-200 p-4 mx-2">
        Our Popular Calss list</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mx-2">
          {PopularCls.map((cls) => (
            <div className="card  bg-base-200 shadow-xl image-full">
              <figure data-AOS="zoom-in-down">
                <img
                  src={cls.classPhoto
                  }
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cls.className}</h2>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default PopularClass;
