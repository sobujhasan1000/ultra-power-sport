import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  return (
    <div>
      <h1 className="text-xl text-center my-4">Total classes {classes.length}</h1>
      <div>
        {classes.map((cls) => (
          <div key={cls._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={cls.classPhoto} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h1 className="text-center text-sky-400">Status: {cls.role==='approved'? 'approved': cls.role==='denied'?'denied':'Pending'} </h1>
              <h2 className="card-title text-xl">Class Name: {cls.className}</h2>
              <h2 className="">Price: ${cls.price}</h2>
              <h2 className="">Seat Range: {cls.seatRange}</h2> 
              <p> Instructor Name: {cls.instructorName}</p>
              <p> Instructor email: {cls.Inemail}</p>
              <div className="flex justify-around">
                <button className="bg-sky-200 rounded-md p-2 btn w-24">
                  Approve
                </button>
                <button className="bg-sky-200 rounded-md p-2 btn w-24">
                  Deny
                </button>
              </div>
              <div className="badge-outline btn my-auto">send feedback</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
