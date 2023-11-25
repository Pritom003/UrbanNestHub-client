import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./UseAuth";
// import useAuth from "./UseAuth";


const useAgent = () => {
    const {user}=useAuth()
   
    const axiosSecure=useAxiosSecure()

    const {data:isagent,isPending:isAgentLoading}=useQuery({
        queryKey:[user?.email,'isagent'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/user/agent/${user.email}`)
            return res.data?.agent;
        }
    })
    return [isagent,isAgentLoading]
};

export default useAgent;