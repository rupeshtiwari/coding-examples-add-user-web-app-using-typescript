import * as $ from 'jquery';
import * as bus from 'pubsub-js';
import * as store from '../../store';

import { AddUserSuccess } from '../../message';
import { User } from '../../store';
bus.subscribe(AddUserSuccess, addUserInTable);

export function addUserInTable(msg: string, userId: string) {
  const user = store.getUserById(userId);
  $('#userList').append(`
  <tr>
  <th scope="row">1</th>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td><button class="btn btn-danger" data-id="${user.id}">Delete</button></td>
</tr>`);
}
