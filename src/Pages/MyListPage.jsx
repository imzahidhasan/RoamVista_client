import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Table from '../Components/Table';

const MyListPage = () => {
  const spot_data = useLoaderData()
  return (
    <div className='container mx-auto p-5'>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Spot name</th>
            <th>Country</th>
            <th>Location</th>
            <th>Total visitor per year</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            spot_data.map((spot,idx) => <tr key={spot._id}>
              <th>{ idx+1}</th>
              <td>{spot.tourist_spot_name}</td>
              <td>{spot.country_name}</td>
              <td>{spot.location}</td>
              <td>{spot.total_visitor_per_year}</td>
              <td><button className='btn btn-outline btn-info'>UPDATE</button></td>
              <td><button className='btn btn-outline btn-error'>DELETE</button></td>
            </tr>)
          }

        </tbody>
      </table>
     
    </div>
  )
}

export default MyListPage