/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuList = ({address,linkTitle, icon:Icon}) => {
    return (
        <NavLink
        to={address}
        className={({ isActive }) =>
        ` flex items-center text-[18px] dark:hover:text-black font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300  hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${
          isActive ? 'dark:text-blue-700 bg-gray-300 text-blue-700 ' : 'text-gray-600 dark:text-white'
        }`} >
        <span>{<Icon className="w-5 h-8 mr-1" />}</span>
       {linkTitle}
      </NavLink>
    );
};

export default MenuList;