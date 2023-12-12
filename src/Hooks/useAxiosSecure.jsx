import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure?.interceptors?.request?.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    })
    // interceptor 401 and 403 status
    axiosSecure?.interceptors?.response?.use(function (response) {
        return response;
    }, async (error) => {
        const status = await error?.response?.status;
        // console.log('status error interceptor 401--->', status);
        //    for 401 or 403 logout uer and  move the user to the login page
        if (status === 401 || status === 403) {
            await logoutUser();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;