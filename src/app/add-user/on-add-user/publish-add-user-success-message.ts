import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';

bus.subscribe(AddUser, publishAddUserSuccessMessage);

export function publishAddUserSuccessMessage(msg: string, user: User) {
  store.addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}
