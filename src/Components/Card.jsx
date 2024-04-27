import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ spot}) => {
    const { description, location, photoURL, country_name, tourist_spot_name, _id }=spot
  return (
      <div className='mx-auto'>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img className="w-full min-h-52 max-h-52 mb-4" src={ photoURL}  />
              <div className="">
                  <h2 className="text-lg font-bold mb-2">{tourist_spot_name}</h2>
                  <p  className='text-gray-700 mb-2' >{ `${location}, ${country_name}`}</p>
                  <p className="text-gray-700 hyphens-auto">{`${description.slice(0,120)}....` }
                  </p>
                  <Link to={`/details/${_id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                          View Details
                      </button>
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default Card