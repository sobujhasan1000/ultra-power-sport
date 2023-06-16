import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
import {  FaGoogle } from 'react-icons/fa';

const GoogleLogIn = () => {
    const {googleSingIn}=useContext(AuthContext);

    const handelgooglelog=()=>{
        googleSingIn()
        .then(result=>{
            const logInUser=result.user;
            console.log(logInUser)
            const saveuser={name:logInUser.displayName, email:logInUser.email}
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveuser)
            })
                .then(res => res.json())
                .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'logIn successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                })
        })
    }
    return (
        <div className='mt-10 bg-emerald-400 text-center rounded-md'>
            <button onClick={handelgooglelog} className='btn text-center my-2 bg-emerald-400 '><FaGoogle/>login with google</button>
        </div>
    );
};

export default GoogleLogIn;