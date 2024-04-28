import { data } from 'autoprefixer'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
const MyListPage = () => {
  const data = useLoaderData()
  const [spot_data, setSpot_data] = useState(data)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roam-vista-server.vercel.app/delete-document`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id })
        }).then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            fetch('https://roam-vista-server.vercel.app/all-tourist-spot')
              .then(res => res.json())
              .then(data => setSpot_data(data))
            toast.success('Deleted successfully!')
          })

      }
    });


  }
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
            spot_data.map((spot, idx) => <tr key={spot._id}>
              <th>{idx + 1}</th>
              <td>{spot.tourist_spot_name}</td>
              <td>{spot.country_name}</td>
              <td>{spot.location}</td>
              <td>{spot.totalVisitorsPerYear}</td>
              <td><Link to={`/update-spot/${spot._id}`}><button className='btn btn-outline btn-info'>UPDATE</button></Link></td>
              <td><button onClick={() => handleDelete(spot._id)} className='btn btn-outline btn-error'>DELETE</button></td>
            </tr>)
          }

        </tbody>
      </table>

    </div>
  )
}

export default MyListPage