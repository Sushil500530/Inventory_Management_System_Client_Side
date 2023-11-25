/* eslint-disable react/prop-types */
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Header = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Navbar />
                {children}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu p-4 w-80 h-screen py-2 bg-white">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Header;