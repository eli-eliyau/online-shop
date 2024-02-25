import { Request, Response } from "express"
import { categoriesProducts } from "./categorys";




export const getProduct = async (req: Request, res: Response) => {
    try {

      const  product=  categoriesProducts.filter((e,i)=>(
             e.id === req.body.productId 
        ))
        
        res.send(product[0])
    } catch (error) {
        console.log(error);
    }
} 