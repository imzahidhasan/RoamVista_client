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
                element: <ViewDetails />
            },
            {
                path: 'add-tourist-spot',
                element:<AddTourishSpot/>
            },
            {
                path: 'all-tourist-spot',
                element:<AllTouristSpot/>
            },
            {
                path: 'my-list',
                element:<MyListPage/>
            },
            {
                path: 'update-spot',
                element:<UpdateSpotPage/>
            }
        ]
    },

])


export default routes