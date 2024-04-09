import React from 'react'
import MovieCard from './MovieCard'
import { movie } from '../utilis/constant'
const Drama = () => {

  let res=movie.filter((element)=>element.genre==="Drama")
  console.log(res)
  
  return (
    <div className='d-flex gap-4 flex-wrap mx-5'>
            {
                res.map((element,index)=><MovieCard {...element} key={index}/>)
            }
    </div>
  )
}

export default Drama
