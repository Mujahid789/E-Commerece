import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import Services from './Services'
import SingleProduct from './SingleProduct'
import Login from '../components/Login'
import UserRegister from '../components/UserRegister'
import Admin from './Admin'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import DeleteProduct from './DeleteProduct'
import ProtectedRoute from '../components/ProtectedRoute'
import Products from './Products'


 


function RouterPage() {
  return (
    <div>
      <Navbar/> 
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/:id' element={<SingleProduct/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<UserRegister/>}/>

        <Route path='/' element={<ProtectedRoute/>}>
        
        <Route path='/admin' element={<Admin/>}>
        <Route index element={<Products/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='addProduct' element={<AddProduct/>}/>
        <Route path='updateProduct' element={<UpdateProduct/>}/>
        <Route path='deleteProduct' element={<DeleteProduct/>}/>
        </Route>
        
        </Route>
        

        
        </Routes>
      </div>
  )
}

export default RouterPage
