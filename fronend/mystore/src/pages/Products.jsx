import React, { useEffect, useState } from 'react'


const Products = () => {

    const[productData,setProductData] = useState([]);

    // Getting user data from MongoDb
    const getUserData = async() =>{
      let result = await fetch("http://localhost:5000/api/v1/user/products")
      result = await result.json();
      setProductData(result)
    }
    console.log(productData)
    //delete user data
    const deleteP = async(id) =>{
        let result = await fetch(`http://localhost:5000/api/v1/user/products/${id}`,{
          method: 'delete'
        })
        result = result.json();
        if(result){
          getUserData()
        }
      }
    
    
      useEffect(()=>{
        getUserData()
      },[])
    

  return (
    <>
    <div className="container my-5 w-75">

    <table className="table table-striped table-hover">
      <thead>
        <tr className="bg-success text-light">
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Activity</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {
          productData.map((p,ind)=>{
            return(
              <>
                <tr>
                      <th scope="row">{ind+1}</th>
                      <td>{p.pName}</td>
                      <td>{p.category}</td>
                      <td>{p.price}</td>
                      <td>{p.quty}</td>
                      <td>{p.activity}</td>
                      <td>
                        {/* <Link to={`/updateuser/${su._id}`} className="btn btn-success btn-sm">
                            <i class="fas fa-edit"></i>
                        </Link> */}
                        <a onClick={()=>deleteP(p._id)} className="btn btn-danger btn-sm">
                           Delete
                        </a>
                    </td>              
                </tr>                
              </>
            )
          })
        }
        
      </tbody>
    </table>
    </div>
  </>
  )
}

export default Products
