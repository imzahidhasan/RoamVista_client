import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FirebaseContext } from '../firebase/FirebaseProvider'

const AddTouristSpot = () => {
  const { user } = useContext(FirebaseContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_email: `${user?.email}`,
      user_name: `${user?.displayName}`
    }
})

  const onSubmit = (data) => { 
    console.log(data);
    reset()
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
                <img className='w-full h-full' src="https://i.ibb.co/9gZm782/The-Little-Things-Working.png" alt="" />
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
                <label className="text-sm">Country Name</label>
                <input {...register("country_name", {
                  required: true,
                  pattern: {
                    value: /^(?=.*\b(?:France|Italy|Spain|England|Netherlands|Switzerland)\b)(?!.*\b(?:France|Italy|Spain|England|Netherlands|Switzerland)\b.*\b(?:France|Italy|Spain|England|Netherlands|Switzerland)\b).*$/,
                    message: 'Invalid input. Please enter a single country name from the following list, with the first letter capitalized: France, Italy, Spain, England, Netherlands, Switzerland.'
                  }
                })} type="text" placeholder="Country name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.country_name && <span className='text-red-500' >{errors.country_name.message||'This field is required'}</span>}

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
                <input {...register("total_visitor_per_year", { required: true })} type="text" placeholder="Enter total visitor per year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.total_visitor_per_year && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User email</label>
                <input {...register("user_email", { required: true })} type="text" placeholder="Enter your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.user_email && <span className='text-red-500' >This field is required</span>}

              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User name</label>
                <input {...register("user_name", { required: true })} type="text" placeholder="Enter your name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border  focus:dark:ring-violet-600 dark:border-gray-300" />
                {errors.user_name && <span className='text-red-500' >This field is required</span>}

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

export default AddTouristSpot