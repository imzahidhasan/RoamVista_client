import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import LoginPage from "../Pages/LoginPage"
import RegisterPage from "../Pages/RegisterPage"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/login',
                element:<LoginPage/>
            },
            {
                path: '/register',
                element:<RegisterPage/>
            }
        ]
    },

])


export default routes