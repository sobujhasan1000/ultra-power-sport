import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import GoogleLogIn from '../../SocialLoging/GoogleLogIn';



const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const {singIn}=useContext(AuthContext);

    const navigate= useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        singIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'LogIn successful',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(user)
            navigate(from, { replace: true });
        })
        
    }
    return (
        <div className='my-4'>
           <div>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-96 text-center gap-8'>
                <input className='p-2 bg-sky-100 rounded-md' type='email'  {...register("email",{required:true})} placeholder='email' />
                <input className='p-2 bg-sky-100 rounded-md' type='password'  {...register("password",{required:true})} placeholder='password' />
                <input className='btn' type="submit" />
            </form>
            <GoogleLogIn></GoogleLogIn> <br />
            <Link className='text-red-500 ml-4' to='/singin'> if don't account pls click here</Link>
           </div>
        </div>
    );
};

export default LogIn;