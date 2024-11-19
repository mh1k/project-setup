import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

//persers
app.use(express());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

console.log(process.cwd());

export default app;
