import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='my-4'>
           <div>
           <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-96 text-center gap-8'>
                <input className='p-2 bg-sky-100 rounded-md' type='email'  {...register("email")} placeholder='email' />
                <input className='p-2 bg-sky-100 rounded-md' type='password'  {...register("email")} placeholder='password' />
                <input className='btn' type="submit" />
            </form>
            <button className='btn text-center my-2 ml-12'>login with facebook</button> <br />
            <Link className='text-red-500 ml-4' to='/singin'> if don't account pls click here</Link>
           </div>
        </div>
    );
};

export default LogIn;