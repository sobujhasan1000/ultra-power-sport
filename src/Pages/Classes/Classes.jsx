import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAdmin from "../../Customhooks/Admin/useAdmin";
import useInstructor from "../../Customhooks/Instructor/useInstructor";

import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from "../../Customhooks/Auth/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


AOS.init();
const Classes = () => {
  const [isAdmin]=useAdmin();
  const[isInstructor]=useInstructor();
  const navigate=useNavigate();
  const location=useLocation();
  const {user}=useAuth();
  

// data load from server
  const { data: approvedClass = [], refetch } = useQuery(
    ["approved"],
    async () => {
      const res = await fetch("https://ultra-sport-server.vercel.app/classes/approved");
      return res.json();
    }
  );
// select course and send server
   const handelSelect=clss=>{
    // console.log(clss)
    const {className,classPhoto,instructorName,price,seatRange}=clss;
    if(user && user.email){
      const selectCourse={className,classPhoto,instructorName,price,seatRange,email: user.email}
      fetch('https://ultra-sport-server.vercel.app/courseSelect',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(selectCourse)
      })
      .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.insertedId){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'selected successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'pls loging ',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/logIn')
    }
   }


  // console.log(approvedClass);
  return (
    <div>
      <h1 className="text-center text-xl font-bold my-4">Total class {approvedClass.length}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 m-2">
        {approvedClass.map((clss) => (
          <div key={clss._id} className="card bg-base-300 shadow-xl ">
            <figure data-aos="zoom-out-right" className="px-10 pt-10">
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
            {isAdmin?<></>: isInstructor?<></>:<>
            <div className="card-actions">
                <button onClick={()=>handelSelect(clss)} className="btn bg-slate-300">selecct Now</button>
              </div>
            </>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
