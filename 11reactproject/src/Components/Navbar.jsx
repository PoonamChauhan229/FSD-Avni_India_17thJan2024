import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MovieFlix</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to='/' className="nav-link active">Home-Movies</Link>
        </li>
        <li className="nav-item">
            <Link to='/thriller' className="nav-link active">Thriller</Link>
        </li>
        <li className="nav-item">
            <Link to='/drama' className="nav-link active">Drama</Link>
        </li>
        <li className="nav-item">
            {/* Loading the page > Not behaviour of SPA */}
          {/* <a className="nav-link active" aria-current="page" href="/addcolor">Add Color-Anchor</a> */}
          <Link to='/addcolor' className="nav-link active">Add Color</Link>
        </li>
        <li className="nav-item">
         
          <Link to='/btstrp' className="nav-link active">Bootstrap Ex</Link>

        </li>
        <li className="nav-item">
            <Link to='/reactbtstrp' className="nav-link active">BasicEX Form-React Bootstrap</Link>
        </li>

        <li className="nav-item">
            <Link to='/addmovieBtstrp' className="nav-link active">AddMovie-Boostrap</Link>

        </li>
        <li className="nav-item">
            <Link to='/display' className="nav-link active">React Startup Example</Link>
        </li>

        
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
