import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

 const useAuth = () => {
    const authConnect = useContext(AuthContext);
    return authConnect;
};
export default useAuth;

