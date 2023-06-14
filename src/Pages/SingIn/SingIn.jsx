import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SingIn = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate=useNavigate();
    const onSubmit = data => {
        // console.log('from data',data)
        createUser(data.email, data.password,data.photoURL)
            .then(result => {
                const logUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveuser={name:data.name, email:data.email, photoURL:data.photoURL}
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(saveuser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'user create successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })

                console.log('result user', logUser)
            })
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 justify-center items-center my-4 bg-sky-200 p-4'>
                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='name'  {...register("name", { required: true })} placeholder='name' />
                {errors.name && <span>name is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='email'  {...register("email", { required: true })} placeholder='email' />
                {errors.email && <span>email is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='password'  {...register("password", { minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]+$/, required: true })} placeholder='password' />
                {errors.password && <span>password is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' name='confirm_password' type='password'  {...register("confirm_password", { required: true, })} placeholder='confirm password' />
                {errors.confirm_password && <span>password is requred</span>}

                <input className='p-2 bg-sky-100 rounded-md w-1/3' type='url'  {...register("photoURL")} placeholder='photo Url' />
                <input className='btn' type="submit" />
            </form>
        </>
    );
};

export default SingIn;