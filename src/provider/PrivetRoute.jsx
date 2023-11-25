/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Shared/Loading";

const PrivetRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <Loading />
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={location?.pathname} replace ></Navigate>
};

export default PrivetRoute;