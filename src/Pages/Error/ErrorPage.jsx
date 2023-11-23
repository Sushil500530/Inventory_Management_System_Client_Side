import { Link } from "react-router-dom";
import Button from "../../Hooks/Button/Button";
import {FaHome} from 'react-icons/fa'

const ErrorPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full ">
        <div className="w-full h-screen">
            <img src='https://i.ibb.co/F3nVyd9/884f6bbb75ed5e1446d3b6151b53b3cf.gif' className="w-full h-full" alt="" />
        </div>
        <div className="absolute top-[75%] text-white text-center">
            <h2 className="text-3xl font-bold">Sorry,</h2>
            <p className="text-3xl font-bold">Page Not Found</p>
           <Link to='/'>
            <Button style={'text-white'} title={'Go Home'}
            icon={FaHome }
            ></Button>
           </Link>
         
        </div>
    </div>
    );
};

export default ErrorPage;