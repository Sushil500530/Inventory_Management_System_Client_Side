import { Link } from "react-router-dom";
import { MdCreate } from "react-icons/md";

const Document = () => {
    return (
        <div className="w-[90%] mx-auto text-center">
            <h2 className="text-2xl font-bold text-start mt-5">Message Here🧨🧨</h2>
            <h3 className="text-xl font-bold text-center my-8">Be a Manager🤠</h3>
            <p className="text-xl font-medium capitalize"> Do you want to be a shop manager? Then click here to add your product</p>
            <Link to='/create-shop'>
                <button className="btn my-5 bg-gradient-to-r from-purple-500 to-pink-500 text-[18px] px-10 hover:text-white">Create Shop <MdCreate className="text-2xl" /></button>
            </Link>
        </div>
    );
};

export default Document;