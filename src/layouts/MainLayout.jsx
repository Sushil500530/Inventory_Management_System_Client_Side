import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
          <Header>
            <Outlet></Outlet>
          </Header>
        </div>
    );
};

export default MainLayout;