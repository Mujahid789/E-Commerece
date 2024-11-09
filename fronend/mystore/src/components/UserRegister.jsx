import React from 'react'
import './Login.css';
import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function UserRegister() {

          const [name, setName]= useState();
          const [email, setEmail]= useState();
          const [password, setPassword]= useState();
          const [phone, setPhone]= useState();
          const [address, setAddress]= useState();

          const navigate = useNavigate();

          const collectUserData=async()=>{
            // e.preventDefault();
            console.log(name, email, password, phone, address);

            let result = await fetch('http://localhost:5000/api/v1/user/register', {
                        method:"post",
                        body: JSON.stringify({name, email, password, phone, address }),
                        // body: JSON.stringify({name, email, password, phone, address}),
                        headers:{
                          'Content-Type': 'application/json'
                  }, 
            })

            console.log(result);
            result = await result.json();
            if(result){
              navigate('/login');
            }
          }

  return (
    <div>
      
      
    <div className='container registermain'>
   <br /><br /> <h1>Sign Up</h1>
    <form className='registerfom'>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">
  Name
</label>
<input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='pasword'/>

<label htmlFor="exampleInputEmail1" className="form-label">
  Email address
</label>
<input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com'/>
<div id="emailHelp" className="form-text">
  We'll never share your email with anyone else.
</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">
  Password
</label>
<input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder='pasword'/>
<label htmlFor="text" className="form-label">
  Phone Number
</label>
<input onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='Phone number'/>
<label htmlFor="textarea" className="form-label">
  Address
</label>
<input onChange={(e)=>setAddress(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder='address'/>
</div>
<div className="mb-3 form-check">


</div>
<button onClick={collectUserData} className="btn btn-primary text-center" type='button'>Register</button>
{/* <Link to={`/login`} className="btn btn-primary text-center">SignUp</Link> */}
</form>

    </div>
  
</div>
  )
}

export default UserRegister
