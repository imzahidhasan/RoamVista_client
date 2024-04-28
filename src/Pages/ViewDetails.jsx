import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {
      const spot_data = useLoaderData()
      console.log(spot_data);
      return (
            <div className="bg-gray-100 py-8">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                              <img
                                    src={spot_data.photoURL}
                                    alt="Eiffel Tower"
                                    className="w-full"
                              />
                              <div className="p-6 bg-indigo-50">
                                    <h1 className="text-3xl font-bold mb-4">{spot_data.tourists_spot_name}</h1>
                                    <p className="text-xl mb-4">Location:{` ${spot_data.location}, ${spot_data.country_Name}`}</p>
                                    <p className="mb-4">
                                          <strong>Average Cost:</strong> {spot_data.average_cost}
                                    </p>
                                    <p className="mb-4">
                                          <strong>Seasonality:</strong> {spot_data.seasonality}</p>
                                    <p className="mb-4">
                                          <strong>Travel Time:</strong>{spot_data.travel_time}</p>
                                    <p className="mb-4">
                                          <strong>Total Visitors per Year:</strong> {spot_data.total_visitor_per_year}</p>
                                    <h2 className="text-xl font-bold mb-2">Description:</h2>
                                    <p className="mb-8">{spot_data.description}</p>
                                    <h2 className="text-xl font-bold mb-2">User Information:</h2>
                                    <p className="mb-4">
                                          <strong>Name:</strong> {spot_data.user_name}</p>
                                    <p className="mb-8">
                                          <strong>Email:</strong> {spot_data.user_email}</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default ViewDetails