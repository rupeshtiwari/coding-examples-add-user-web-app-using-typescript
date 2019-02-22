import { addNewUser } from '../controllers/add-user.controller';

export const userRoutes = (app: any) =>
  app
    .route('/api/user')
    .post(addNewUser)
    .get((req: any, res: any) => res.send(`GET user successfully`));
