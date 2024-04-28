import React, { useState } from 'react'
import Card from '../Components/Card'
import { useLoaderData } from 'react-router-dom'
import Heading from '../Components/Heading'

const AllTouristSpot = () => {
  const data = useLoaderData()
  const [spot_data, setSpotData] = useState(data)
  const handleAscendingSort = () => {
    fetch(``)
      .then(res => res.json())
      .then(result => setSpotData(result))
  }
  const handleDescendingSort = () => {
    fetch(``)
      .then(res => res.json())
      .then(result => setSpotData(result))
  }



  return (
    <>
      <Heading text={'Best Places to Visit'} para={`
From the towering peaks of the Swiss Alps to the sun-kissed beaches of Bali, the world's best places to visit promise awe-inspiring beauty and unforgettable experiences. Whether it's exploring the bustling streets of New York City or marveling at the grandeur of the Taj Mahal, there's something to captivate every traveler's heart and soul.`} />

      <label className="mb-2 ">Sort by</label>
      <div className="relative">
        <select className="inline-block appearance-none  text-center bg-white border border-gray-300 hover:border-gray-500 px-4 py-4  rounded shadow leading-tight focus:dark:ring-violet-600 dark:border-gray-300"
        >
          <option disabled >select</option>
          <option onClick={handleAscendingSort} >Ascending</option>
          <option onClick={handleDescendingSort} >Descending</option>
        </select>
      </div>
      <div className=' container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>

        {
          spot_data.map((spot) => <Card key={spot._id} spot={spot}></Card>)
        }
      </div>
    </>
  )
}

export default AllTouristSpot