import React from 'react'

const AddTouristSpot = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-xl">Tourist Spot Information</p>
              <p className="text-sm">Share your favorite travel destinations from around the world! Help fellow explorers discover exciting new places to visit by submitting details about remarkable tourist spots, hidden gems, and must-see attractions.</p>
            </div>

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Photo URL of tourist spot</label>
                <input type="text" placeholder="Enter photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourist spot name</label>
                <input type="text" placeholder="Enter tourist spot name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Country Name</label>
                <input type="text" placeholder="Country name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input type="text" placeholder="Enter the spot location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Average cost</label>
                <input type="text" placeholder="Average cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Seasonality</label>
                <input type="text" placeholder="Summer,Winter or something" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Travel time</label>
                <input type="text" placeholder="How many days" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Total Visitors Per Year</label>
                <input type="text" placeholder="Enter total visitor per year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User email</label>
                <input type="text" placeholder="Enter your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">User name</label>
                <input type="text" placeholder="Enter your name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <input
                  type="text"
                  placeholder="Write something about the spot"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:border-none p-4 border dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>

              <div className="col-start-2 col-span-4  flex justify-center">
                <button className="btn w-full">Add Tourist Spot</button>
              </div>
            </div>
          </fieldset>

        </form>
      </section>
    </div>
  )
}

export default AddTouristSpot