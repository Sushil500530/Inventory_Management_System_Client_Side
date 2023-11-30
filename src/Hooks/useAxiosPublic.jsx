import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://server-side-beta-bay.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic; 
};

export default useAxiosPublic;