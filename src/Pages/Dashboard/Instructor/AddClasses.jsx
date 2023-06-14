import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Customhooks/Auth/useAuth";
import Swal from "sweetalert2";

const AddClasses = () => {
    const {user}=useAuth();
    console.log(user);

    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    fetch('http://localhost:5000/classes',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data),
  })
  .then((res)=>res.json())
  .then((result)=>{
      console.log(result)
      if (data.insertedId) {
        reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'class aproved panding',
            showConfirmButton: false,
            timer: 1500
        })
    }
  })
  } 
//   console.log(data);

  return (
    <div className="w-full p-4">
        <h2 className='my-6 text-xl  text-center'>Add Your class</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 pt-4 text-center'>
        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input defaultValue={user.displayName}
            className="text-input w-80  p-1 rounded-md "
            {...register("instructorName")}
            placeholder="Instructor name"
          />
          <input defaultValue={user.email}
            className="text-input w-80 p-1 rounded-md"
            {...register("Inemail")}
            placeholder="instructor email"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input
            className="text-input w-80  p-1 rounded-md "
            {...register("classPhoto")}
            placeholder="class photo url"
          />
          <select {...register("className")} className="text-input w-80  p-1 rounded-md " placeholder="selected  class">
          <option value="foodball">foodball</option>
          <option value="cricet">cricket</option>
          <option value="badmainton">badmainton</option>
          <option value="tenis">hokey</option>
          <option value="tenis">volleyball</option>
          <option value="tenis">Tenis</option>
          <option value="tenis">Table tanis</option>
          <option value="tenis">Busket Ball</option>
          <option value="tenis">Base Ball</option>
          <option value="tenis">Rugby</option>
        </select>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input
            className="text-input w-80  p-1 rounded-md "
            {...register("seatRange")}
            placeholder="seat Range"
          />
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("price")}
            placeholder="price"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-10 justify-center p-4">
          <input defaultValue={user.photoURL}
            className="text-input w-80  p-1 rounded-md "
            {...register("instructorPhoto")}
            placeholder="Photo url instructor"
          />
          <input
            className="text-input w-80 p-1 rounded-md"
            {...register("phone")}
            placeholder="phone number"
          />
        </div>
        <input className="btn p-2 mb-2" type="submit" />
      </form>
    </div>
  );
};

export default AddClasses;
