import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FirebaseContext } from '../firebase/FirebaseProvider'
import toast from 'react-hot-toast'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Navbar = ({ toggleDarkMode, darkMode }) => {
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
            isActive ? "border-b-2 border-blue-400 dark:border-[#DFD0B8]" : ""
        }>Home</NavLink></li>
        <li><NavLink to={'/all-tourist-spot'} className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-400 dark:border-[#DFD0B8]" : ""
        }>All Tourists Spot</NavLink></li>
        {<li>{user ? <NavLink to={'/add-tourist-spot'} className={({ isActive }) =>
            isActive ? "border-b-2 border-blue-400 dark:border-[#DFD0B8]" : ""
        }>Add Tourists Spot</NavLink> : ''}</li>}
        {
            <li>{user ? <NavLink to={`/my-list/${user?.email}`} className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-400 dark:border-[#DFD0B8]" : ""
            }>My List</NavLink> : ''}</li>
        }
    </>
    return (
        <div className='sticky top-0 z-50 shadow-lg'>
            <div className="navbar container mx-auto bg-gray-200 dark:bg-[#153448] dark:text-[#DFD0B8]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost font-bold text-lg md:text-4xl">RoamVista</Link>
                </div>
                <div className="navbar-center hidden font-medium lg:flex">
                    <ul className="menu-horizontal gap-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end  gap-2 md:gap-2">
                    <button
                        className={`btn btn-circle text-xl transition-colors duration-800 ${darkMode
                            ? 'bg-[#153448] text-white hover:bg-gray-700'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <MdDarkMode  /> : <MdLightMode />}
                    </button>
                    {user ? <>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
                                <a className="my-anchor-element"><img src={user?.image} /></a>
                                <Tooltip className='relative z-10' anchorSelect=".my-anchor-element" >
                                    {user?.displayName}
                                </Tooltip>
                            </div>
                        </div>
                        <button onClick={handleLogout} className='btn'>Logout</button></> : <><Link to={'/register'} className="btn">Register</Link>
                        <Link to={'/login'} className="btn">Login</Link>
                    </>}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar