import React from 'react'
import { Link } from 'react-router-dom'
const adminDash = () => {
  return (
    <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h1>Movie Management</h1>
                <Link to="/add-movie">Add New Movie</Link>
                <Link to="/view-movie">View Movie</Link>
            </div>
            <div>
                <h1>Genre Management</h1>
                <Link to="/add-genre">Add New Genre</Link>
                <Link to="/add-genre">View Genre</Link>
            </div>
    </div>
  )
}

export default adminDash