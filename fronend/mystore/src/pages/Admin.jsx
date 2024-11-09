import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Admin = () => {
  return (
    <>
   

    <nav className='nava'>
    <Link to= "products"> Products</Link>
        <Link to= "addProduct"> add Product</Link>
        {/* <Link to= "updateProduct"> Update Product</Link> */}
        {/* <Link to= "deleteProduct"> Delete Product</Link> */}
        
    </nav>
    <Outlet/>
   
    </>
  )
}

export default Admin
