import React from 'react';
import { useForm } from 'react-hook-form';

const SingIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 justify-center items-center my-4 bg-sky-200 p-4'>
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='name'  {...register("name")} placeholder='name' />
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='email'  {...register("email")} placeholder='email' />
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='password'  {...register("password",{min: 6, max: 15, pattern: /^[A-Za-z]+$/i}) } placeholder='password' />
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='password'  {...register("verifypassword")} placeholder='confram password' />
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='url'  {...register("photoUrl")} placeholder='photo Url' />
                <input className='btn' type="submit" />
            </form>
        </>
    );
};

export default SingIn;