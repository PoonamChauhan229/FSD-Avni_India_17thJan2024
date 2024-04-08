import React from 'react'
import MovieCard from './MovieCard'
import { movie } from '../utilis/constant'
const MovieList = () => {
  return (
    <div className='d-flex gap-4 flex-wrap mx-5'>
            {
                movie.map((element,index)=><MovieCard {...element} key={index}/>)
            }
    </div>
  )
}

export default MovieList
