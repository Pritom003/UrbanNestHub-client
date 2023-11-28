import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: 'https://urban-nest-hub-server-site.vercel.app'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });



  return axiosSecure;
};

export default useAxiosSecure;
