import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PopularInstractor = () => {
  const navigate = useNavigate();
  const { data: instructor = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await fetch(
        "https://ultra-sport-server.vercel.app/users/instructor"
      );
      const responseData = await res.json();
      return responseData.slice(0, 8);
    }
  );

  // const handleSeeCourses = (email) => {
  //   navigate(`/fixtInsCourse?email=${email}`);
  // };

  return (
    <div>
      <h1 className="text-center text-xl font-bold mx-2 p-4">
        Meet Our instractor
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2">
        {instructor.map((inst) => (
          <div className="card  shadow-xl  p-4" key={inst._id}>
            <div className=" text-center">
              <h2 className="text-lg font-bold"> {inst.name}</h2>
            </div>
            <figure className="">
              <img
                className="h-64 w-full p-2"
                src={inst.photoURL}
                alt={inst.name}
              />
            </figure>
            <div className="text-center">
              <Link to="classes">
                <button
                  className="bg-orange-500 p-1 m-1 rounded-md"
                  // onClick={() => handleSeeCourses(inst.email)}
                >
                  See Courses
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstractor;
