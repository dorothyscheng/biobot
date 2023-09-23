import express, { ErrorRequestHandler, Express } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import kitRoutes from './routes/kitRoutes';
import kitShippingData from './KitShippingData';

config();
kitShippingData.initialize();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());

app.use('/', kitRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
};
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
