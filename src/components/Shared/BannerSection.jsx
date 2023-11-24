/* eslint-disable react/prop-types */
import { MdOutlineMore } from "react-icons/md";
const BannerSection = ({ image, title, description }) => {
    return (
        <>
            <img src={image} className="w-full rounded-lg" />
            <div className="w-auto h-full absolute bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                <div className='text-white space-y-7 w-2/3'>
                    <h2 className='text-3xl lg:text-6xl font-bold'>{title}</h2>
                    <p>{description}</p>
                    <div className='text-white '>
                        <button className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 border-purple-500 text-white hover:border-purple-500 transition ease-in text-[18px] hover:text-black font-semibold capitalize px-10'>Read More <span className="text-3xl animate-pulse"><MdOutlineMore /> </span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection;