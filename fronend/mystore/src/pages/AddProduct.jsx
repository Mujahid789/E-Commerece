import React from 'react'
import '../components/Login.css';
import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddProduct() {

          const [pName, setpName]= useState();
          const [category, setCategory]= useState();
          const [pDisc, setpDisc]= useState();
          const [price, setPrice]= useState();
          const [quty, setQuty]= useState();
          const [activity, setActivity]= useState();

          const navigate = useNavigate();
          
          const saveProductData=async()=>{
            // e.preventDefault();
            console.log(pName, category, pDisc, price, quty, activity);

            let result = await fetch('http://localhost:5000/api/v1/user/uploadProduct', {
                        method:"post",
                        body: JSON.stringify({pName, category, pDisc, price, quty, activity }),
                        // body: JSON.stringify({name, email, password, phone, address}),
                        headers:{
                          'Content-Type': 'application/json'
                  }, 
            })

            console.log(result);
            result = await result.json();
            if(result){
              navigate('/admin');
            }
          }

  return (
    <div>
      
      
    <div className='container registermain'>
   <br /> <h1>Add Products</h1>
    <form className='registerfom'>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">
  Product Name
</label>
<input onChange={(e)=>setpName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='product name'/>

<label htmlFor="exampleInputEmail1" className="form-label">
  Category
</label>
<input onChange={(e)=>setCategory(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='category'/>

</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">
  Discription
</label>
<input onChange={(e)=>setpDisc(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='product Discription'/>
<label htmlFor="text" className="form-label">
  Price
</label>
<input onChange={(e)=>setPrice(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='price'/>
<label htmlFor="textarea" className="form-label">
  Quantity
</label>
<input onChange={(e)=>setQuty(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='Quantity'/>
<label htmlFor="textarea" className="form-label">
  Activity
</label>
<input onChange={(e)=>setActivity(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='true / false'/>
</div>
<div className="mb-3 form-check">


</div>
<button onClick={saveProductData} className="btn btn-primary text-center" type='button'>Add Product</button>
{/* <Link to={`/login`} className="btn btn-primary text-center">SignUp</Link> */}
</form>

    </div>
  
</div>
  )
}

export default AddProduct
