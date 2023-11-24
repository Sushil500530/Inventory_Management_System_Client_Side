import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Resister/Register";
import Home from "../Pages/Home/Home";
import CreateShop from "../Pages/CreateShop/CreateShop";
import Dashboard from "../layouts/Dashboard";

const Router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'create-shop',
                element:<CreateShop />
            },
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard />,
        children: [
            {
                // path:'/'
            }
        ]
    }
])

export default Router;