import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';
import * as $ from 'jquery';
import { BASE_API_URL } from '../../settings';

bus.subscribe(AddUser, publishAddUserSuccessMessage);

export function publishAddUserSuccessMessage(msg: string, user: User) {
  $.post(`${BASE_API_URL}user`, user)
    .done(onSuccessPublishMessage)
    .fail(onFail);
}

function onSuccessPublishMessage(user: User) {
  console.log('success', user);
  store.addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}

function onFail(message: any) {
  console.log('fail', message);
}
