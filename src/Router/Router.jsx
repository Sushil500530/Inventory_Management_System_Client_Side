import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Resister/Register";
import Home from "../Pages/Home/Home";
import CreateShop from "../Pages/CreateShop/CreateShop";
import Dashboard from "../layouts/Dashboard";
import ProductManager from "../layouts/Dashboard/product manager/ProductManager";
import ProductAdd from "../layouts/Dashboard/product manager/product add/ProductAdd";
import ProductSection from "../layouts/Dashboard/product manager/product section/ProductSection";
import SaleCollection from "../layouts/Dashboard/product manager/sale collection/SaleCollection";
import Checkout from "../layouts/Dashboard/product manager/checkout/Checkout";
import Payment from "../layouts/Dashboard/product manager/subscription and payment/Payment";
import SaleSummary from "../layouts/Dashboard/product manager/sale summary/SaleSummary";
import ManageShop from "../layouts/Dashboard/System Admin/manage shop/ManageShop";
import AllUsers from "../layouts/Dashboard/System Admin/AllUsers/AllUsers";
import Settings from "../layouts/Dashboard/common/Settings";

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
            // product manager section 
            {
                path:'manager',
                element:<ProductManager />
            },
            {
                path:'product-add',
                element:<ProductAdd />
            },
            {
                path:'products-section',
                element:<ProductSection />
            },
            {
                path:'sale-Collection',
                element:<SaleCollection />
            },
            {
                path:'checkout',
                element:<Checkout />
            },
            {
                path:'subscription-and-payment',
                element:<Payment />
            },
            {
                path:'sale-summary',
                element:<SaleSummary />
            },

            // system admin section 
            {
                path:'manager-shop',
                element:<ManageShop />
            },
            {
                path:'admin-sale-summary',
                element:<SaleSummary />
            },
            {
                path:'all-users',
                element:<AllUsers />
            },
            // common section 
            {
                path:'settings',
                element:<Settings />
            },
        ]
    }
])

export default Router;