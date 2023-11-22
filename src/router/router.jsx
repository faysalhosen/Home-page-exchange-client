
import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddService from "../Pages/AddService/AddService";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ManageService from "../Pages/ManageService/ManageService";
import UpdateService from "../Pages/UpdateService/UpdateService";
// import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('https://home-page-service.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addservices',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
               // loader: () => fetch('https://home-page-service.vercel.app/services')
                // https://home-service-exchange-server.vercel.app
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://home-page-service.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://home-page-service.vercel.app/services/${params.id}`)
            },
            {
                path: '/purchase',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: '/updateService/:id',
                element: <UpdateService></UpdateService>,
                loader: ({params}) => fetch(`https://home-page-service.vercel.app/purchase/${params.id}`)
            }


        ]
    },
]);
export default router;  