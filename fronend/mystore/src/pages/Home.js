import React from 'react'
import Products from '../data/Db'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <>
    <div >
      <h1>Products</h1>
      
      <div className='container'>

        <div className='row'>

          {
            Products.map((items) => {

              return(
                <div className='my-4 col-lg-3 col-md-6 col-12'>
                <div className="card " style={{width: "17rem" }}>
                
                <img src={items.pic} style={{width: "100%" , height:"200px"}}  className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 class="card-title">{items.name}</h5>
                  <p className="card-text">Some quick example text to build.... </p>
                  <Link to={`/${items.id}`} className="btn btn-danger btn-sm">Add to Cart</Link>
                </div>
              </div>
              </div>
              )

            })
          }

        </div>

      </div>
    </div>
    </>
  )
}

export default Home
