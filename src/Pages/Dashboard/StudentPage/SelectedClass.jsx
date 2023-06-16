import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Customhooks/Auth/useAuth';

const SelectedClass = () => {
    const {user}=useAuth();
    console.log('selected',user)
    const { data: selectedClass = [], refetch } = useQuery(
        ["selectedClass"],
        async () => {
          const res = await fetch(`https://ultra-sport-server.vercel.app/selectedClass?email=${user?.email}`);
          return res.json();
        }
      );
      console.log(selectedClass)
    return (
        <div className='bg-green-200 w-full h-full m-2 rounded-md'>
            <h1 className='text-center my-6 text-3xl font-bold'>Your selected class </h1>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {
                    selectedClass.map(cls=>
                        <div key={cls._id} className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                          <h2 className="card-title"> course name: {cls.className}</h2>
                          <p>Price:   ${cls.price}</p>
                          <p>instractor:   {cls.instructorName}</p>
                          <div className="card-actions justify-end">
                            <button className="btn ">pay now</button>
                            <button className="btn ">delete</button>
                          </div>
                        </div>
                      </div>  
                        )
                }
            </div>
        </div>
    );
};

export default SelectedClass;