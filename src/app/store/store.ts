import { User } from './user';

const userList: User[] = [];

export function addUser(user: User) {
  userList.push(user);
}

export function getUserById(id: string) {
  return userList.filter(u => u.id === id).pop();
}
