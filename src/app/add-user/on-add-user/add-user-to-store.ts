import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../messages';
import { User } from '../../store/user';
import { addUser } from '../../store';


bus.subscribe(AddUser, onAddUser);

export function onAddUser(msg: string, user: User) {
  addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}
