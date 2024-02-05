import express, { Application, Request, Response } from 'express';
import cors from 'cors'; 
import router from './router';

const app: Application = express();

app.use(express.json());
app.use(cors({origin:'*'}));

app.use('/api',router)

app.listen(4000, () => {
    console.log('RUN PORT 4000');
});
