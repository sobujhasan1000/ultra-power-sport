import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../axios/axioseSecure';
import { useQuery } from '@tanstack/react-query';
const useInstructor = () => {
    const {user}=useAuth();
    const [axiosSecure]=useAxiosSecure();
        const {data: isInstructor}=useQuery({
            queryKey:['isInstructor',user?.email],
            queryFn: async ()=>{
                const res=await axiosSecure.get(`/users/instructor/${user?.email}`)
                // console.log('useadmin',res)
                return res.data.instructor;
            }
        })
        return[isInstructor]
};


export default useInstructor;