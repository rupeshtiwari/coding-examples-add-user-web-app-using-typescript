import * as bus from 'pubsub-js';
import * as store from '../../store';
import * as $ from 'jquery';
import { AddUserSuccess } from '../../messages';

bus.subscribe(AddUserSuccess, showUserOnUi);
export function showUserOnUi(msg: string, id: string) {
  const user = store.getUserById(id);
  const html = `<tr>
  <th scope="row">1</th>
  <td>${user.name}</td>
  <td>${user.name}</td>
  <td><button data-id="${id}" class="btn btn-danger">Delete</button></td>
</tr>`;
  $('#userList').append(html);
}
