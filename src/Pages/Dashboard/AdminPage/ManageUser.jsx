import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    console.log(users)


// =======================create admin============================

    const adminMake= id=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


// ============== create instructor =====================

    const instructrMake= id=>{
        fetch(`http://localhost:5000/users/instructor/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    return (
        <div className='w-full p-2'>
            <h1>Total Users {users.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-lg '>
                            <th>#</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        users.map((user,index)=> <tr key={user._id}>
                            <th>{index +1}</th>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>
                               {user.role==='admin'? 'admin': user.role==='instructor'?'instructor':'student'} 
                            </td>
                            <td className=''>
                                <button onClick={()=>adminMake(user._id)} className=' btn bg-sky-200   rounded-xl'>admin</button> 
                                <small className='text-center m-2'>or</small>
                                <button onClick={()=>instructrMake(user._id)} className='bg-slate-300 rounded-xl btn '>Instructor</button>
                            </td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;