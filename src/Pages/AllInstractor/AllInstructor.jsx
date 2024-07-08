import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllInstructor = () => {
  const { data: instructor = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await fetch(
        "https://ultra-sport-server.vercel.app/users/instructor"
      );
      return res.json();
    }
  );
  console.log(instructor);
  return (
    <div>
      <h1 className="text-center my-6 text-xl font-semibold">
        Total instractor: {instructor.length}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 p-2 my-6">
        {instructor.map((inst) => (
          <div className="card bg-red-100 shadow-xl" key={inst._id}>
            <div className=" p-2 text-center">
              <h2 className="text-xl font-bold"> {inst.name}</h2>
            </div>
            <figure className="">
              <img className="h-56 w-full" src={inst.photoURL} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
