import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import GoogleLogIn from '../../SocialLoging/GoogleLogIn';



const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const {singIn}=useContext(AuthContext);
    const onSubmit = data => {
        singIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
    }
    return (
        <div className='my-4'>
           <div>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-96 text-center gap-8'>
                <input className='p-2 bg-sky-100 rounded-md' type='email'  {...register("email")} placeholder='email' />
                <input className='p-2 bg-sky-100 rounded-md' type='password'  {...register("password")} placeholder='password' />
                <input className='btn' type="submit" />
            </form>
            <GoogleLogIn></GoogleLogIn> <br />
            <Link className='text-red-500 ml-4' to='/singin'> if don't account pls click here</Link>
           </div>
        </div>
    );
};

export default LogIn;