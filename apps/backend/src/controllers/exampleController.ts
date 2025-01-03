import { Request, Response } from 'express';
import {prisma} from "@trekathon/database"
export const exampleController = (req: Request, res: Response) => {
  res.json({ message: 'Hello, this is an example endpoint!' });
  



};
