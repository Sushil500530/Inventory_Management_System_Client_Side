/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../components/Shared/Loading";

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(isAdmin);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Loading />
    }
    if (user && isAdmin) {
        return children

    }
    return <Navigate to="/" state={location.pathname} replace ></Navigate>
};

export default AdminRoute;