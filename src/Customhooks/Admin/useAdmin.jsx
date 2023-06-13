
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../axios/axioseSecure';
import { useQuery } from '@tanstack/react-query';
const useAdmin = () => {
    const {user}=useAuth();
    const [axiosSecure]=useAxiosSecure();
        const {data: isAdmin}=useQuery({
            queryKey:['isAdmin',user?.email],
            queryFn: async ()=>{
                const res=await axiosSecure.get(`/users/admin/${user?.email}`)
                console.log('useadmin',res)
                return res.data.admin;
            }
        })
        return[isAdmin]
};


export default useAdmin;
