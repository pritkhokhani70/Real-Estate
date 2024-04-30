import express from 'express';
import { singnup } from '../controllers/auth.controller.js'

const router = express.Router();

router.post("/signup", singnup);


export default router;