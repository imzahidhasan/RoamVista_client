import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import LoginPage from "../Pages/LoginPage"
import RegisterPage from "../Pages/RegisterPage"
import ViewDetails from "../Pages/ViewDetails"
import HomePage from "../Pages/HomePage"
import AddTourishSpot from "../Pages/AddTouristSpot"
import AllTouristSpot from "../Pages/AllTouristSpot"
import MyListPage from "../Pages/MyListPage"
import UpdateSpotPage from "../Pages/UpdateSpotPage"
import PrivetRoute from "../Pages/PrivetRoute"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element:<HomePage/>
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'Details',
                element: <PrivetRoute> <ViewDetails /></PrivetRoute>
            },
            {
                path: 'add-tourist-spot',
                element: <PrivetRoute><AddTourishSpot /></PrivetRoute>
            },
            {
                path: 'all-tourist-spot',
                element:<AllTouristSpot/>
            },
            {
                path: 'my-list',
                element: <PrivetRoute><MyListPage /></PrivetRoute>
            },
            {
                path: 'update-spot',
                element: <PrivetRoute><UpdateSpotPage /></PrivetRoute>
            }
        ]
    },

])


export default routes