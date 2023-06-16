import React from 'react';
import useAuth from '../../Customhooks/Auth/useAuth';

const DashboartHome = () => {
    const {user}=useAuth();
    console.log(user)
    return (
        <div className='bg-slate-300 rounded-full '>
            <h1 className='text-center text-xl font-bold p-10  h-64 w-64 mt-16'> well come <br />to dashboard Name: {user?.displayName} <br /></h1>
        </div>
    );
};

export default DashboartHome;