import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../Components/Card';
import Heading from '../Components/Heading';

const AllSpotInCountry = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <div className='grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto min-h-screen place-items-center'>
      {data.length > 0 ? (
        data.map((spot) => <Card key={spot._id} spot={spot} />)
      ) : (
        <div className=" col-span-3">
          <Heading text={`No Spot found for this country`} />
        </div>
      )}
    </div>
  )
}

export default AllSpotInCountry