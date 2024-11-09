import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../data/Db'

function SingleProduct() {
    const{id} =useParams();
    console.log(id);
    // const Fitem= Products.filter(items=>items.id ==id)
    const Fitem= Products.find(items=>items.id ==id)
    console.log(Fitem)


  return (<>
    <div >
        <h1>Single Product Page</h1>
        
        

        <div className="card mb-3" style={{width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={Fitem.pic} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{Fitem.name}</h5>
       
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      
    </div>
    </>
  )
}

export default SingleProduct
