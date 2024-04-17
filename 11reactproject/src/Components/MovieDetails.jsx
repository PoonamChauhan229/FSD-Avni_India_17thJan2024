import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const {id}=useParams()
  return (
    <div>
      <h1>Movie Details-glimpse</h1>
      <h4>Id is {id}</h4>
    </div>
  )
}

export default MovieDetails
