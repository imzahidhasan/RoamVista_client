import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase/FirebaseProvider'
import toast from 'react-hot-toast'

const RegisterPage = () => {
    const { createUser, updateUser } = useContext(FirebaseContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, photoURL, password } = data
        const createUserPromise= createUser(email, password)
            .then(() => {
                updateUser(name, photoURL)
            })
            .catch((error) => {
            console.error(error)
        })
        toast.promise(createUserPromise, {
            loading: 'creating your profile',
            success: 'Profile created successfully',
            error: 'Error,Profile not created!',
        });
        reset()
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register</h1>
                        <p className="text-sm dark:text-gray-600">Register to create your account</p>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Name</label>
                                <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm">Email</label>
                                <input {...register("email", {
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Email address is not in the correct format'
                                    }
                                })} type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm">Photo URL</label>
                                <input {...register("photoURL", {
                                    pattern: {
                                        value: /^https:\/\//,
                                        message: 'URL must start with https://'
                                    }
                                })} type="text" name="photoURL" placeholder="Your photo url here" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {errors.photoURL && <span className='text-red-500'>{errors.photoURL.message}</span>}
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>
                                </div>
                                <input {...register("password", {
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, and at least 6 characters long."
                                    }
                                })} type="password" placeholder='Enter your password' className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
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