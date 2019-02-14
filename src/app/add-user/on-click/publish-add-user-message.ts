const uuid = require('uuid/v1');
import { User } from '../../store/user';
import * as bus from 'pubsub-js';
import { AddUser } from '../../message';
import * as $ from 'jquery';

$(function() {
  listen();
});

export function publishAddUser() {
  const user: User = {
    firstName: $('#firstName')
      .val()
      .toString(),
    lastName: $('#lastName')
      .val()
      .toString(),
    id: AddUserModule.createNewUserId()
  };
  bus.publishSync(AddUser, user);
}
export function listen() {
  $('#btnAddUser').on('click', AddUserModule.publishAddUser);
}
export function createNewUserId() {
  return uuid();
}

export const AddUserModule = { publishAddUser, createNewUserId, listen };
