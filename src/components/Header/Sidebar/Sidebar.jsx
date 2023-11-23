import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-2">

            <NavLink to="/" className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }>Home
            </NavLink>
            <NavLink to="/add-book" className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }> Add Book
            </NavLink>
            <NavLink to="/all-books" className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm text-white border-purple-500 hover:border hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'
            }>All Books
            </NavLink>
            <NavLink to="/borrow-books" className={({ isActive }) =>
                isActive ? 'btn bg-purple-500 btn-sm hover:border text-white border-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]' : 'btn btn-ghost btn-sm hover:border hover:text-purple-500 hover:bg-transparent hover:border-purple-500 capitalize text-[18px]'}>
                Borrow Books
            </NavLink>
        </div>
    );
};

export default Sidebar;