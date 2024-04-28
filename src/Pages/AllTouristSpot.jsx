import React, { useState } from 'react'
import Card from '../Components/Card'
import { useLoaderData } from 'react-router-dom'
import Heading from '../Components/Heading'

const AllTouristSpot = () => {
  const data = useLoaderData()
  const [spot_data, setSpotData] = useState(data)
  const handleAscendingSort = () => {
    console.log('ascending');
    fetch(`https://roam-vista-server.vercel.app/ascending_sort`)
      .then(res => res.json())
      .then(result => setSpotData(result))
  }
  const handleDescendingSort = () => {
    console.log('descending');
    fetch(`https://roam-vista-server.vercel.app/descending_sort`)
      .then(res => res.json())
      .then(result => setSpotData(result))
  }



  return (
    <>
      <Heading text={'Best Places to Visit'} para={`
From the towering peaks of the Swiss Alps to the sun-kissed beaches of Bali, the world's best places to visit promise awe-inspiring beauty and unforgettable experiences. Whether it's exploring the bustling streets of New York City or marveling at the grandeur of the Taj Mahal, there's something to captivate every traveler's heart and soul.`} />
      <div className="flex justify-center items-center m-4">
        <select
          className="appearance-none text-center bg-blue-300 border border-gray-300 hover:border-gray-500 px-4 py-4 rounded shadow leading-tight focus:dark:ring-violet-600 dark:border-gray-300"
          onChange={(event) => {
            const selectedOption = event.target.value;
            if (selectedOption === "ascending") {
              handleAscendingSort();
            } else if (selectedOption === "descending") {
              handleDescendingSort();
            }
          }}
        >
          <option value="sort by">Sort by</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
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