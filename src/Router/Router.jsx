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
import AllUsers from "../layouts/Dashboard/System Admin/AllUsers/AllUsers";
import Settings from "../layouts/Dashboard/common/Settings";
import PrivetRoute from "../provider/PrivetRoute";
import AdminRoute from "../layouts/Dashboard/AdminRoute";
import UpdateProduct from "../layouts/Dashboard/product manager/updateProduct/UpdateProduct";
import AdminHome from "../layouts/Dashboard/System Admin/AdminHome/AdminHome";
import ManagerShop from "../layouts/Dashboard/System Admin/Manager Shop/ManagerShop";
import GuestHome from "../layouts/Dashboard/Guest/GuestHome";
import Document from "../layouts/Dashboard/Guest/Document";
import SingleProduct from "../Pages/Home/Shop/SingleProduct";
import PaymentSection from "../layouts/Dashboard/Guest/Payment/PaymentSection";
import PaymentHistory from "../layouts/Dashboard/Guest/Payment/PaymentHistory";
import AllProducts from "../layouts/Dashboard/System Admin/all product/AllProducts";
import AdminSaleSummary from "../layouts/Dashboard/System Admin/admin sale summary/AdminSaleSummary";

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
                element: <PrivetRoute><CreateShop /></PrivetRoute>
            },
            {
                path:'product-details/:id',
                element: <PrivetRoute><SingleProduct /></PrivetRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/all-product/${params.id}`)
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            // guest section 
            {
                path:'guest-home',
                element:<PrivetRoute><GuestHome /></PrivetRoute>
            },
            {
                path:'doc-type',
                element:<PrivetRoute><Document /></PrivetRoute>
            },
            {
                path:'payment',
                element:<PrivetRoute><PaymentSection /></PrivetRoute>
            },
            {
                path:'payment-history',
                element:<PrivetRoute><PaymentHistory /></PrivetRoute>
            },
            // product manager section 
            {
                path:'manager',
                element:<PrivetRoute><ProductManager /></PrivetRoute>
            },
            {
                path:'product-add',
                element:<PrivetRoute><ProductAdd /></PrivetRoute>
            },
            {
                path:'products-section',
                element:<PrivetRoute><ProductSection /></PrivetRoute>
            },
            {
                path:'sale-Collection',
                element:<PrivetRoute><SaleCollection /></PrivetRoute>
            },
            {
                path:'checkout',
                element:<PrivetRoute><Checkout /></PrivetRoute>
            },
            {
                path:'subscription-and-payment',
                element:<PrivetRoute><Payment /></PrivetRoute>
            },
            {
                path:'sale-summary',
                element:<PrivetRoute><SaleSummary /></PrivetRoute>
            },

            // system admin section 
            {
                path:'admin-home',
                element:<AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path:'manager-shop',
                element:<AdminRoute><ManagerShop /></AdminRoute>
            },
            {
                path:'all-prodoucts',
                element:<AdminRoute><AllProducts /></AdminRoute>
            },
            {
                path:'admin-sale-summary',
                element:<AdminRoute><AdminSaleSummary /></AdminRoute>
            },
            {
                path:'all-users',
                element:<AdminRoute><AllUsers /></AdminRoute>
            },
            // common section 
            {
                path:'settings',
                element:<PrivetRoute><Settings /></PrivetRoute>
            },
        ]
    },
    {
        path:"/updated-product/:id",
        element:<PrivetRoute><UpdateProduct /></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
    },
])

export default Router;