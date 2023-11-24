/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

const MenuList = ({address,linkTitle, icon:Icon}) => {
    return (
        <NavLink
        to={address}
        className={({ isActive }) =>
        ` flex items-center text-[18px] font-medium px-4 py-2 duration-200 transform  hover:bg-gray-300   hover:text-gray-700 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${
          isActive ? 'bg-gray-300 text-blue-700' : 'text-gray-600'
        }`} >
        <span>{<Icon className="w-5 h-8 mr-1" />}</span>
       {linkTitle}
      </NavLink>
    );
};

export default MenuList;