import express from 'express';
import { registerController, loginController, dummyController } from '../controllers/authContoller.js';
import { isAdmin, signInRequire } from '../middleware/authMiddleware.js';
import { uploadProduct , getData, deleteProduct, singlePro , updatePro} from '../controllers/productController.js';



// creating Router Object
const router = express.Router();


// Method POST / Route Register
router.post("/register", registerController)

router.get("/products", getData)
router.delete('/products/:id', deleteProduct)
router.get('/singlePro/:id', singlePro)
router.put('/products/:id', updatePro)


// Method POST / Route Login
router.post("/login", loginController)

// add products post route
router.post("/uploadProduct", uploadProduct)


// Method GET / Route dummy
router.get("/dummy", signInRequire, isAdmin, dummyController)



export default router;

