import { db } from '../db';

export const addNewUser = (req: any, res: any) => {
  db.users.push(req.body);
  console.log(`user added successfully`);
  res.json(req.body);
};
