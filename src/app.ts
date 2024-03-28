import { globalCatch } from '@middlewares/global-catch';
import cors from 'cors';
import express from 'express';
import notFound from './middlewares/notFount-catch';
import router from './modules/allOperation/allOperation.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(notFound);

app.use(globalCatch);

export default app;
