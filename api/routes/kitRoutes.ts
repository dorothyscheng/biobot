import express from 'express';
import getKit from '../controllers/getKit';

const router = express.Router();

router.post('/', getKit);

export default router;
