import React, { useEffect } from "react";
import useAuth from "../../../Customhooks/Auth/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const { user } = useAuth();
  console.log(user);

  const { data: posted = [], refetch } = useQuery(["posted"], async () => {
    const res = await fetch(
      `https://ultra-sport-server.vercel.app/users/posted?email=${user?.email}`
    );
    return res.json();
  });

  console.log(posted);

  return (
    <div>
      <h1 className="text-center text-xl font-semibold my-6">
        My all classes information
      </h1>
      <div className=" bg-slate-200">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg ">
              <th>#</th>
              <th>Class Name</th>
              <th>Seat Range</th>
              <th>Enroled student</th>
              <th>status</th>
              <th>update now</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {posted.map((post, index) => (
              <tr key={post._id}>
                <th>{index + 1}</th>
                <td>{post.className}</td>
                <td>{post.seatRange}</td>
                <td>{post.seatRange}</td>
                <td>{post.status}</td>
                <td className="">
                  <button className="bg-slate-300 rounded-xl btn ">
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
