import express from 'express';
import getKit from '../controllers/getKit';

const router = express.Router();

router.get('/', getKit);

export default router;
