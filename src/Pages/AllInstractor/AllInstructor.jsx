import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllInstructor = () => {
  const { data: instructor = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await fetch("http://localhost:5000/users/instructor");
      return res.json();
    }
  );
  console.log(instructor);
  return (
    <div>
      <h1 className="text-center my-6 text-xl font-semibold">Total instractor: {instructor.length}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10   p-4 my-10">
        {instructor.map((inst) => (
          <div className="card bg-base-300 shadow-xl" key={inst._id}>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Name: {inst.name}</h2>
              <p>email: {inst.email}</p>
            </div>
            <figure className='h-96'>
              <img className="" src={inst.photoURL} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
