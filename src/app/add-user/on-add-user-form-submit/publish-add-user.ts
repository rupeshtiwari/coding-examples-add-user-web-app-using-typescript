const uuidv1 = require('uuid/v1');
import * as bus from 'pubsub-js';
import * as $ from 'jquery';
import { User } from '../../store/user';
import { AddUser } from '../../messages';

$(function() {
  listen();
});

export function publishAddUser() {
  const user: User = {
    id: publishAddUserModule.getUserId(),
    name: $('#name')
      .val()
      .toString(),
  };
  bus.publishSync(AddUser, user);
}

export function getUserId() {
  return uuidv1();
}

export function listen() {
  $('#btnAddUser').on('click', publishAddUser);
}

export const publishAddUserModule = {
  listen,
  getUserId,
  publishAddUser,
};
