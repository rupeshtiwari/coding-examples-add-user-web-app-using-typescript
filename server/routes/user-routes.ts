import { addNewUser } from '../controllers/add-user.controller';

export const userRoutes = (app: any) => app.route('/user').post(addNewUser);
