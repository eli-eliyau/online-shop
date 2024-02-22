import express, { Router, Request, Response } from 'express';
import { getCategoryProducts, getCategoryTabs } from './controllers/categorys';
import {getProduct} from './controllers/product'

const router: Router = express.Router();

router.get('/getCategoryTabs',getCategoryTabs);
router.post('/getCategoryProducts',getCategoryProducts);
router.post('/getProduct',getProduct);



export default router;
