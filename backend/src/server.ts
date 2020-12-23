import express, { response } from 'express';
import routes from './routes';
import cors from 'cors';
import './providers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=>{
    console.log('Server started on port 3333');
});