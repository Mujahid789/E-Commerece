import React, { useEffect } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  let navigate = useNavigate();

  let authUser=localStorage.getItem('token');
  const userRole = JSON.parse(localStorage.getItem("token"));
  
console.log(userRole);
  useEffect(()=>{

    if(authUser){
      navigate('/');
    }

  },[])


  return (
    <div className='stick'>
      
      <nav className="navbar navbar-expand-lg navbar-dark nav">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">E-Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>

        { authUser ?
        <>
              <li className="nav-item">
                <Link className="nav-link  " to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  " to="/admin">Admin</Link>
              </li>
       </>
       :<></>

       }

        
      </ul>
      {/* <Link to={`/register`} className="btn btn-sm btn-outline-light mx-2" type="submit">SignUp<i class="bi bi-person-fill"></i></Link> */}
      <Link to={`/login`} className="btn btn-sm btn-outline-light mx-1" type="submit">Login<i class="bi bi-person-fill"></i></Link>
      <button className="btn btn-outline-light mx-3" type="submit"><i class="bi bi-cart-plus-fill"></i></button>
    
    
      </div>

  </div>
</nav>
{/* <div className='container' >
<form className="d-flex col-4 my-2 ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>       
        <button className="btn btn-outline-success" type="submit">Search</button>

             </form>
</div> */}

    </div>
  )
}

export default Navbar
