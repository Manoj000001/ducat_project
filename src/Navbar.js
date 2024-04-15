import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() {
  
  let{loginWithRedirect,logout,isAuthenticated}=useAuth0()
let fun=()=>{

  alert(isAuthenticated ? "login" : "logout")
}
let fun2=()=>{
  alert(isAuthenticated ? "login" : "logout" )
}
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><img height={40}  src="data:image/png;base64,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" alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/course" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/course/python">Python</Link></li>
            <li><Link className="dropdown-item" to="/course/java">Java </Link></li>
         
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/placement">Placement </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact us </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/certificates">Certificates</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adduser"> Add User </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/showuser"> Show User </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/updateuser/1"> Update User </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/searchdata"> Search Data </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={loginWithRedirect}> <h4 onClick={fun}>login</h4> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={logout}> <h4 onClick={fun2}>logout</h4> </Link>
        </li>
       
     
       
      </ul>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navbar
