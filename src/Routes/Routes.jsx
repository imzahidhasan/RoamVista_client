import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import LoginPage from "../Pages/LoginPage"
import RegisterPage from "../Pages/RegisterPage"
import ViewDetails from "../Pages/ViewDetails"
import HomePage from "../Pages/HomePage"
import AddTouristSpot from "../Pages/AddTouristSpot"
import AllTouristSpot from "../Pages/AllTouristSpot"
import MyListPage from "../Pages/MyListPage"
import UpdateSpotPage from "../Pages/UpdateSpotPage"
import PrivetRoute from "../Pages/PrivetRoute"
import AllSpotInCountry from "../Pages/AllSpotInCountry"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: () => fetch('https://roam-vista-server.vercel.app/all-tourist-spot')
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
                path: 'details/:id',
                element: <PrivetRoute> <ViewDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://roam-vista-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'add-tourist-spot',
                element: <PrivetRoute><AddTouristSpot /></PrivetRoute>
            },
            {
                path: 'all-tourist-spot',
                element: <AllTouristSpot />,
                loader: () => fetch('https://roam-vista-server.vercel.app/all-tourist-spot')
            },
            {
                path: 'my-list/:email',
                element: <PrivetRoute><MyListPage /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://roam-vista-server.vercel.app/my-list/${params.email}`)
            },
            {
                path: 'update-spot',
                element: <PrivetRoute><UpdateSpotPage /></PrivetRoute>
            },
            {
                path: 'spot-in-the-country/:country_name',
                element: <AllSpotInCountry />,
                loader: ({ params }) => fetch(`http://localhost:3000/spot-in-the-country/${params.country_name}`)
            },
           
        ]
    },

])


export default routes