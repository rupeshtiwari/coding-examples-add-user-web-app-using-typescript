import * as $ from 'jquery';
import * as bus from 'pubsub-js';
import * as store from '../../store';

import { AddUserSuccess } from '../../message';
import { User } from '../../store';
describe('add-user-toui', () => {
  beforeAll(() => {
    $('body').append(`
        <table class="table table-striped table-dark" id="userList">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>`);
  });
  it('should add user on the table', () => {
    const user: User = {
      firstName: 'Rupesh',
      lastName: 'Tiwari',
      id: '43'
    };
    spyOn(store, 'getUserById').and.returnValue(user);

    bus.publishSync(AddUserSuccess, user.id);

    expect($('#userList').html()).toContain(`<tr>
    <th scope="row">1</th>
    <td>Rupesh</td>
    <td>Tiwari</td>
    <td><button class="btn btn-danger" data-id="43">Delete</button></td>
  </tr>`);
  });
});
