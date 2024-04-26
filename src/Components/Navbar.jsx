import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FirebaseContext } from '../firebase/FirebaseProvider'
import toast from 'react-hot-toast'

const Navbar = () => {
    const { user, logout, setUser } = useContext(FirebaseContext)
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logged out successfully.')
            })
        setUser(null)
    }
    const links = <>
        <li><NavLink to={'/'} className={({ isActive }) =>
            isActive ? "text-blue-800 bg-blue-300" : ""
        }>Home</NavLink></li>
        <li><NavLink to={'/all-tourist-spot'} className={({ isActive }) =>
            isActive ? "text-blue-800 bg-blue-300" : ""
        }>All Tourists Spot</NavLink></li>
        {<li>{user?<NavLink to={'/add-tourist-spot'} className={({ isActive }) =>
            isActive ? "text-blue-800 bg-blue-300" : ""
        }>Add Tourists Spot</NavLink>:''}</li>}
        {
            <li>{user?<NavLink to={'/my-list'} className={({ isActive }) =>
                isActive ? "text-blue-800 bg-blue-300" : ""
            }>My List</NavLink>:''}</li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost font-bold text-lg md:text-4xl">RoamVista</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end  gap-1 md:gap-2">
                {user ? <button onClick={handleLogout} className='btn'>Logout</button> : <><Link to={'/register'} className="btn">Register</Link>
                    <Link to={'/login'} className="btn">Login</Link></> }
            </div>
        </div>
    )
}

export default Navbar