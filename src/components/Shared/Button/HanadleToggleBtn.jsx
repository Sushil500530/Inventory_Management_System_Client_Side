/* eslint-disable react/prop-types */

import { BsSun } from "react-icons/bs";
import useThemeMode from "../../../Hooks/useThemeMode";
import { MdOutlineDarkMode } from "react-icons/md";

const HanadleToggleBtn = ({ toggler }) => {
    const { changeTheme, mode } = useThemeMode();
    return (
        <>
            <button onClick={changeTheme} className="w-full bg-transparent btn-sm hover:text-blue-500 transition mb-5 flex items-center justify-center">
                {mode === "dark" ? <BsSun className='text-3xl'></BsSun> : <MdOutlineDarkMode className='text-3xl'></MdOutlineDarkMode>}
            </button>
            <label htmlFor='Toggle3' className='inline-flex w-full justify-center items-center rounded-md cursor-pointer text-gray-800'
            >
                <input onChange={toggler} id='Toggle3' type='checkbox' className='hidden peer'
                />

                <span className=' px-6 text-[18px] font-medium py-3 rounded-l-md bg-purple-500 peer-checked:bg-gray-300'>
                    Guest
                </span>
                <span className=' px-6 text-[18px] font-medium py-3 rounded-r-md bg-gray-300 peer-checked:bg-gradient-to-r from-purple-500 to-pink-500'>
                    Manager
                </span>
            </label>
        </>
    );
};

export default HanadleToggleBtn;