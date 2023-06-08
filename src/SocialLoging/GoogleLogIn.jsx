import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const GoogleLogIn = () => {
    const {googleSingIn}=useContext(AuthContext);

    const handelgooglelog=()=>{
        googleSingIn()
        .then(result=>{
            const logInUser=result.user;
            console.log(logInUser)
        })
    }
    return (
        <div>
            <button onClick={handelgooglelog} className='btn text-center my-2 ml-12'>login with google</button>
        </div>
    );
};

export default GoogleLogIn;