import { useQuery } from "@tanstack/react-query";
import React from "react";

const Classes = () => {
  const { data: approvedClass = [], refetch } = useQuery(
    ["approved"],
    async () => {
      const res = await fetch("http://localhost:5000/classes/approved");
      return res.json();
    }
  );
  console.log(approvedClass);
  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4">Total class {approvedClass.length}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 m-2">
        {approvedClass.map((clss) => (
          <div key={clss._id} className="card bg-base-300 shadow-xl ">
            <figure className="px-10 pt-10">
              <img
                src={clss.classPhoto}
                alt="Shoes"
                className="rounded-xl h-72"
              />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{clss.className}</h2>
              <p>instractor Name: {clss.instructorName}</p>
              <p>available seat: {clss.seatRange}</p>
              <p>course price: {clss.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">selecct Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
