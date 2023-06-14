import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

//   handel approved
 const handelApprove=id=>{
    fetch(`http://localhost:5000/classes/approve/${id}`,{
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
 }

//  handel denied

const handelDeny=id=>{

}

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
                <h1 className="text-center text-sky-400">Status: {cls.status==='approved'? 'approved': cls.status==='denied'?'denied':'Pending'} </h1>
              <h2 className="card-title text-xl">Class Name: {cls.className}</h2>
              <h2 className="">Price: ${cls.price}</h2>
              <h2 className="">Seat Range: {cls.seatRange}</h2> 
              <p> Instructor Name: {cls.instructorName}</p>
              <p> Instructor email: {cls.Inemail}</p>
              <div className="flex justify-around">
                <button onClick={()=>handelApprove(cls._id)} className="bg-sky-200 rounded-md p-2 btn w-24">
                  Approve
                </button>
                <button onClick={()=>handelDeny(cls._id)} className="bg-sky-200 rounded-md p-2 btn w-24">
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
