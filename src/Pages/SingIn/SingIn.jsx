import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';


const SingIn = () => {
    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const {createUser}=useContext(AuthContext);
    const onSubmit = data => {
        // console.log('from data',data)
        createUser(data.email, data.password)
        .then(result=>{
            const logUser=result.user;
            console.log('result user',logUser)
        })
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 justify-center items-center my-4 bg-sky-200 p-4'>
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='name'  {...register("name",{required:true})} placeholder='name' />
                {errors.name && <span>name is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='email'  {...register("email",{required:true})} placeholder='email' />
              {errors.email && <span>email is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='password'  {...register("password",{minLength:6, maxLength:20, pattern: /^[A-Za-z]+$/i,required:true}) } placeholder='password' />
                {errors.password && <span>password is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' name='confirm_password' type='password'  {...register("confirm_password",{required:true,})} placeholder='confirm password' />
                {errors.confirm_password && <span>password is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='url'  {...register("photoUrl")} placeholder='photo Url' />
                <input className='btn' type="submit" />
            </form>
        </>
    );
};

export default SingIn;