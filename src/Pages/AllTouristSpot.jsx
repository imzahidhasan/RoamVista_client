import React from 'react'
import Card from '../Components/Card'
import { useLoaderData } from 'react-router-dom'
import Heading from '../Components/Heading'

const AllTouristSpot = () => {
  const spot_data = useLoaderData()
  console.log(spot_data);
  return (
    <>
      <Heading text={'Best Places to Visit'} para={ `
From the towering peaks of the Swiss Alps to the sun-kissed beaches of Bali, the world's best places to visit promise awe-inspiring beauty and unforgettable experiences. Whether it's exploring the bustling streets of New York City or marveling at the grandeur of the Taj Mahal, there's something to captivate every traveler's heart and soul.`} />
    <div className=' container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>
      {
        spot_data.map((spot) => <Card key={spot._id} spot={spot}></Card>)
      }
      </div>
    </>
  )
}

export default AllTouristSpot