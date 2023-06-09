import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';

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
        <div>
            <button onClick={handelgooglelog} className='btn text-center my-2 ml-12'>login with google</button>
        </div>
    );
};

export default GoogleLogIn;