import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import useAdmin from "../../Customhooks/Admin/useAdmin";
import useInstructor from "../../Customhooks/Instructor/useInstructor";
import useAuth from "../../Customhooks/Auth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const FixtInstractorCourse = () => {
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email");
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: classes = [], refetch } = useQuery(
    ["classes", email],
    async () => {
      const res = await fetch(
        `https://ultra-sport-server.vercel.app/classes?email=${email}`
      );
      return res.json();
    },
    { enabled: !!email }
  );

  const handleSelect = (clss) => {
    const { className, classPhoto, instructorName, price, seatRange } = clss;
    if (user && user.email) {
      const selectCourse = {
        className,
        classPhoto,
        instructorName,
        price,
        seatRange,
        email: user.email,
      };
      fetch("https://ultra-sport-server.vercel.app/courseSelect", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Selected successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please log in",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/logIn");
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4">
        Total classes: {classes.length}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 m-2">
        {classes.map((clss) => (
          <div key={clss._id} className="card bg-base-300 shadow-xl">
            <figure data-aos="zoom-out-right" className="px-10 pt-10">
              <img
                src={clss.classPhoto}
                alt={clss.className}
                className="rounded-xl h-72"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{clss.className}</h2>
              <p>Instructor Name: {clss.instructorName}</p>
              <p>Available Seats: {clss.seatRange}</p>
              <p>Course Price: {clss.price}</p>
              {isAdmin || isInstructor ? null : (
                <div className="card-actions">
                  <button
                    onClick={() => handleSelect(clss)}
                    className="btn bg-slate-300"
                  >
                    Select Now
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixtInstractorCourse;
