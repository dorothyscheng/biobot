import express, { ErrorRequestHandler, Express, Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());

app.use(express.json());

app.use('/', (req, res) => {
    res.send('Here i am!');
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
};
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
