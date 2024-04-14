import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails";
import PrivateRouter from '../routes/PrivateRouter';
import UpdateProfile from "../pages/UpdateProfile";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                loader: () => fetch('./fakeData.json'),
                element: <Home />
            },
            {
                path: '/:id',
                loader: () => fetch('./fakeData.json'),
                element: <PrivateRouter><EstateDetails /></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile />
            },
            {
                path: '/contact',
                element: <ContactUs />
            }
        ]
    }
]);

export default router;