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
        <div>
            <h1>all selected class</h1>
        </div>
    );
};

export default SelectedClass;