import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//persers
app.use(express());
app.use(express.json())
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello world');
};

app.get('/', getAController);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello world');
// });

console.log(process.cwd());

export default app;
