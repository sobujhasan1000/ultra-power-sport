import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Customhooks/Auth/useAuth";
import Swal from "sweetalert2";

const AddClasses = () => {
    const {user}=useAuth();
    console.log(user);

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    fetch('https://ultra-sport-server.vercel.app/classes',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data),
  })
  .then((res)=>res.json())
  .then((result)=>{
      console.log(result)
      if (result.insertedId) {
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
        <h2 className='my-6 text-xl  text-center font-bold'>Add Your class</h2>
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
          <option value="Football">foodball</option>
          <option value="Cricet">cricket</option>
          <option value="Badmainton">badmainton</option>
          <option value="Hokey">hokey</option>
          <option value="Volleyball">volleyball</option>
          <option value="Tenis">Tenis</option>
          <option value="Table Tanis">Table tanis</option>
          <option value="Busket Ball">Busket Ball</option>
          <option value="Base ball">Base Ball</option>
          <option value="Rugby">Rugby</option>
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
