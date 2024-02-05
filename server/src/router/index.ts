import express, { Router, Request, Response } from 'express';
import { getCategoryProducts, getCategoryTabs } from './controllers/categorys';

const router: Router = express.Router();

router.get('/getCategoryTabs',getCategoryTabs);
router.post('/getCategoryProducts',getCategoryProducts);



export default router;
