import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Customhooks/Auth/useAuth';
import Swal from 'sweetalert2';

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
    //   console.log(selectedClass)

    const handelDelet=cls=>{
        console.log(cls)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClass/${cls._id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }


    return (
        <div className='bg-green-200 w-full h-full m-2 rounded-md'>
            <h1 className='text-center my-6 text-3xl font-bold'>Your selected class </h1>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {
                    selectedClass?.map(cls=> 
                        <div key={cls._id} className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                          <h2 className="card-title"> course name: {cls.className}</h2>
                          <p>Price:   ${cls.price}</p>
                          <p>instractor:   {cls.instructorName}</p>
                          <div className="card-actions justify-end">
                            <button className="btn ">pay now</button>
                            <button onClick={()=>handelDelet(cls)} className="btn ">delete</button>
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