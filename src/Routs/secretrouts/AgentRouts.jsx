
import useAuth from "../../Hooks/UseAuth";

import { Navigate, useLocation } from 'react-router-dom';
import useAgent from "../../Hooks/UseAgent";


const AgentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const  [isagent,isAgentLoading]=useAgent()
    const location = useLocation();


    if (loading || isAgentLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isagent) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AgentRoute;

 