import ProductsModel from "../models/ProductsModel.js";





export const uploadProduct = async(req,res) =>{    
    try {
        const {pName, category, pDisc, price, quty, activity} = req.body;
        if(!pName){
            return res.send({message: "Product name required"})
        }

        if(!category){
            return res.send({message: "availability required"})
        }

        if(!pDisc){
            return res.send({message: "Description is required"})
        }
        if(!price){
            return res.send({message: "Price is required"})
        }
        if(!quty){
            return res.send({message: "Quantity is required"})
        }
        if(!activity){
            return res.send({message: "availability required"})
        }
       

        // checking whether user record is already available or not ?
        const existingProduct = await ProductsModel.findOne({pName})
        if(existingProduct){
            return res.status(200).send({
                success: true,
                message: "user already exists"
            })
        }
        
        // creating object of product Schema
        const user = await new ProductsModel({pName, category, pDisc, price, quty, activity}).save();

        res.status(201).send({
            success: true,
            message: "Product created successfully",
            user
        })
    
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })

    }

}



//getting data from db

// export const getData =async(req, res)=>{

//     let uData = await product.find();        
//     if(uData.length>0){
//         res.send(uData)
//     }else{
//         res.send({msg: "No record available"})
//     }
// }
export const getData = async (req, res) => {
    try {
      const uData = await ProductsModel.find();
      if (uData.length > 0) {
        res.send(uData);
      } else {
        res.send({ msg: "No records available" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "An error occurred while fetching data" });
    }
  };
  
    // app.get("/users",async(req, res)=>{})


// Deleting one user on the basis of ID

export const deleteProduct =async(req,res)=>{
    let result = await ProductsModel.deleteOne({_id: req.params.id})    
    res.send(result)    
}

// app.delete('/users/:id',

   

// Get Single User Detail on the basis of ID from MongoDB
 export const singlePro=async(req,res)=>{
    let result = await ProductsModel.findOne({_id: req.params.id});  
    
    if(result){
        res.send(result)
    }else{
        res.send({msg: "No record found"})
    }
    
}

// Editing / Updating User Data on the basis of Id in MongoDB 

export const updatePro=async(req,res)=>{
    let result = await ProductsModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}        
    )
    res.send(result)
}
//app.put("/users/:id",