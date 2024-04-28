import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router-dom'
import { FirebaseContext } from '../firebase/FirebaseProvider'
import Swal from 'sweetalert2'

const UpdateSpotPage = () => {
  const { user } = useContext(FirebaseContext)

  const {_id} = useLoaderData()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.matchedCount>0) {
          Swal.fire({
            title: "Spot updated successfully!",
            text: "You clicked the button!",
            icon: "success"
          })
        }
      })


  }






  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Tourist Spot Information</p>
              <p className="text-sm">Share your favorite travel destinations from around the world! Help fellow explorers discover exciting new places to visit by submitting details about remarkable tourist spots, hidden gems, and must-see attractions.</p>
              <div>


              </div>
            </div>

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Photo URL of tourist spot</label>
                <input {...register("photoURL", {
                  required: true,
                  pattern: {
                    value: /^https:\/\//,
                    message: 'URL must start with https://'
                  }
                })} type="text" placeholder="Enter photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.photoURL && <span className='text-red-500' >{errors.photoURL.message || 'This field is required'}</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourist spot name</label>
                <input {...register("tourist_spot_name", { required: true })} type="text" placeholder="Enter tourist spot name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.tourist_spot_name && <span className='text-red-500' >This field is required</span>}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="mb-2 ">Select a country:</label>
                <div className="relative">
                  <select
                    {...register('country_name', { required: true })}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-4  rounded shadow leading-tight focus:dark:ring-violet-600 dark:border-gray-300"
                  >
                    <option disabled >Country</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="England">England</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Switzerland">Switzerland</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>


              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input {...register("location", { required: true })} type="text" placeholder="Enter the spot location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.location && <span className='text-red-500' >This field is required</span>}

              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Average cost</label>
                <input {...register("average_cost", { required: true })} type="text" placeholder="Average cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.average_cost && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Seasonality</label>
                <input {...register("seasonality", { required: true })} type="text" placeholder="Summer,Winter or something" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.seasonality && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Travel time</label>
                <input {...register("travel_time", { required: true })} type="text" placeholder="How many days" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.travel_time && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Total Visitors Per Year</label>
                <input {...register("totalVisitorsPerYear", { required: true })} type="text" placeholder="Enter total visitor per year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.totalVisitorsPerYear && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="mb-2 ">Your email:</label>
                <div className="relative">
                  <select
                    {...register('user_email', { required: true })}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-4  rounded shadow leading-tight focus:dark:ring-violet-600 dark:border-gray-300"
                  >
                    <option value={user?.email}>{user?.email}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="mb-2 ">Your name</label>
                <div className="relative">
                  <select
                    {...register('user_name', { required: true })}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-4  rounded shadow leading-tight focus:dark:ring-violet-600 dark:border-gray-300"
                  >
                    <option value={user?.displayName}>{user?.displayName}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

              </div>
              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Write something about the spot"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300"
                />
                {errors.description && <span className='text-red-500' >This field is required</span>}
              </div>

              <div className="col-start-2 col-span-4  flex justify-center">
                <button className="btn btn-primary w-full">Add Tourist Spot</button>
              </div>
            </div>
          </fieldset>

        </form>
      </section>
    </div>
  )
}

export default UpdateSpotPage