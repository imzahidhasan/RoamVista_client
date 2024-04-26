import React from 'react'

const AllTouristSpot = () => {
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://via.placeholder.com/400x200" alt="Tourist Spot Image" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">Tourist Spot Name</h2>
          <p class="text-gray-700 mb-2">Average Cost: $100</p>
          <p class="text-gray-700 mb-2">Total Visitors Per Year: 50,000</p>
          <p class="text-gray-700 mb-2">Travel Time: 5 days</p>
          <p class="text-gray-700 mb-4">Seasonality: Summer</p>
          <a href="#" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</a>
        </div>
    </div>
  )
}

export default AllTouristSpot