import * as bus from 'pubsub-js';
import { User } from '../store/user';
import { AddUser, AddUserSuccess } from '../messages';
import { getUserById, addUser } from '../store/store';

bus.subscribe(AddUser, onAddUser);

function onAddUser(msg: string, user: User) {
  addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}
