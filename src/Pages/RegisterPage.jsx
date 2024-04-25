import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register</h1>
                        <p className="text-sm dark:text-gray-600">Register to create your account</p>
                    </div>
                    <form className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm">Photo URL</label>
                                <input type="text" name="photoURL" placeholder="Your photo url here" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" placeholder='Enter your password' className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                            </div>
                        </div>
                    </form>
                            <p className="p-6 text-sm text-center dark:text-gray-600">Already have an account?
                                <Link to={'/login'} className="hover:underline dark:text-violet-600">Login</Link>.
                            </p>
                </div>
            </div>
        </>
    )
}

export default RegisterPage