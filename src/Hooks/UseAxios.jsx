
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://urban-nest-hub-server-site.vercel.app', 
    // baseURL: 'http://localhost:5000'
})

const useAxios= () => {
    return axiosPublic;
};

export default useAxios;