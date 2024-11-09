import React from 'react'
import './Login.css';

import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Login() {

  
          const [email, setEmail]= useState('');
          const [password, setPassword]= useState('');
          const navigate = useNavigate();

          const handleEmailChange = (e) => {
            e.preventDefault();
            setEmail(e.target.value);
          };
        
          const handlePasswordChange = (e) => {
            e.preventDefault();
            setPassword(e.target.value);
          };


          // const saveData =(e)=>{
          //   e.preventDefault();

          // }

         

          const ValitdateUser=async(e)=>{

            e.preventDefault();
            console.log(email, password);
            try {
              
            

            let result = await fetch('http://localhost:5000/api/v1/user/login', {
                        method:"post",
                        
                        // body: JSON.stringify({name, email, password, phone, address}),
                        headers:{
                          'Content-Type': 'application/json',
                  }, 
                  body: JSON.stringify({email, password}),
            })

            // result = await result.json();
          //  let auth= localStorage.setItem("user", JSON.stringify(result));
            // if(auth){
            //   navigate('/');
            // }
            //_________________

            const data = await result.json();
            console.log(data);

            if (result.ok) {
              // Login successful
              const { token, user} = data;
              // Store the token and user details in the browser's local storage or state management library
              const auth =localStorage.setItem('token',JSON.stringify({token, user}));
              // Perform any necessary actions after successful login
              if(!auth){
                console.log('auth is empty');
              }
              // if(auth.role==1){
              //   navigate('/');
              // }
              navigate('/');
              
              
                
              
              
             
              
            }
             else {
              // Login failed
              console.log(data.message);
              // Handle error cases, such as displaying an error message
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }

            //_____________
          }
          
  return (
    <div>
      
      
        <div className='container main'>
       <br /><br /> <h1>Login</h1>
        <form className='fom'>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='abc@gmail.com'/>
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder='pasword'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Keep Login
    </label>
  </div>
 <button onClick={ValitdateUser} typt="button" className="btn btn-primary text-center">Login</button>
  {/* <Link to={`/`} className="btn btn-primary text-center">Login</Link> */}

  <br /><nobr>If you not Registered ?</nobr><Link to={`/register`} className="">Register Now</Link>
</form>

        </div>
      
    </div>
  )
}

export default Login


