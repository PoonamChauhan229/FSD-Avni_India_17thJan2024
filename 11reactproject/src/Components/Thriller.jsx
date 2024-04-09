import React from 'react'
import MovieCard from './MovieCard'
import { movie } from '../utilis/constant'
const Thriller = () => {

  let res=movie.filter((element)=>element.genre==="Thriller")
  console.log(res)
  
  return (
    <div className='d-flex gap-4 flex-wrap mx-5'>
            {
                res.map((element,index)=><MovieCard {...element} key={index}/>)
            }
    </div>
  )
}

export default Thriller
