import React, { useState } from 'react'

const MovieCard = ({name,poster,rating,summary,glimpse,director,year,cast,genre}) => {
    const [actor1,actor2]=cast
    const [show,setShow]=useState(false)
    return (
        <div>
            <div className="card" style={{width: "22rem"}}>
                <img src={poster} className="card-img-top" alt="..." height={200} />
                <div className="card-body p-2">
                   <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                    <h5 className="card-title me-1">{name}</h5>
                    <h5 className="bi bi-caret-down-fill me-1 text-warning"
                        onClick={()=>setShow(!show)}
                    ></h5>
                    {/* video> glimpse */}
                    <h5 className="bi bi-info-circle-fill me-1 text-primary"></h5>
                    </div>                   
                    <h5 className="card-title">{rating}</h5>
                   </div>
                   {show &&  <p className="card-text">{summary.substring(0,115)}...</p>}
                </div>
                <ul className="m-0">
                    <div className='d-flex'>
                    <li className="list-group-item" style={{fontSize:"15px"}}>Director By<b>-{director.substring(0, 12)},
                    <i className='text-warning'> {year},</i>
                    <i className='text-success'> {genre}</i></b>
                    </li>
                    </div>
                </ul>
                <div className="card-body p-0 mt-1 text-center mb-1">
                <i className='text-info '><b>❤Cast:{actor1.substring(0, 10)},{actor2.substring(0, 10)}❤</b></i>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
