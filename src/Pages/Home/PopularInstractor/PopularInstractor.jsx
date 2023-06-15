import { useQuery } from "@tanstack/react-query";
import React from "react";

const PopularInstractor = () => {
  const { data: instructor = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await fetch("http://localhost:5000/users/instructor");
      const responseData = await res.json();
      return responseData.slice(0, 6);
    }
  );
  console.log(instructor);
  return (
    <div>
      <h1 className="text-center text-xl font-bold bg-violet-200 mx-2 my-4 p-4">
        Our popular instractor
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2">
      {instructor.map((inst) => (
          <div className="card bg-base-300 shadow-xl" key={inst._id}>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Name: {inst.name}</h2>
            </div>
            <figure className=''>
              <img className="h-96 w-full" src={inst.photoURL} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstractor;
