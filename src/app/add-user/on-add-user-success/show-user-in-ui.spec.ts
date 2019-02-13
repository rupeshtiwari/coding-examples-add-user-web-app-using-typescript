import * as bus from 'pubsub-js';
import * as store from '../../store';
import * as $ from 'jquery';
import { AddUserSuccess } from '../../messages';

describe('show-user-in-ui', () => {
  it('can add user row in html on addusersuccess message', () => {
    const user = { name: 'Rupesh', id: '123' };
    $('body').append('<table id="userList"></table>');
    spyOn(store, 'getUserById').and.returnValue(user);
    bus.publishSync(AddUserSuccess, user.id);
    expect($('#userList').html()).toContain(
      `<tr>
  <th scope="row">1</th>
  <td>${user.name}</td>
  <td>${user.name}</td>
  <td><button data-id="${user.id}" class="btn btn-danger">Delete</button></td>
</tr>`,
    );
  });
});
