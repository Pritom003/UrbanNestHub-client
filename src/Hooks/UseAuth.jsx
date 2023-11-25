import { useContext } from "react";
import { AuthContext } from "../Providers/AuthiProvider";



const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;