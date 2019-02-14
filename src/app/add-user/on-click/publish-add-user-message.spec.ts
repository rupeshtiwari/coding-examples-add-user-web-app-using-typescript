import * as $ from 'jquery';
import * as bus from 'pubsub-js';
import { AddUser } from '../../message';
import { User } from '../../store/user';
import { AddUserModule } from './publish-add-user-message';

describe('publsh-add-user-message', () => {
  beforeAll(() => {
    $('body').append(`
      <form class="form">
      <div class="form-group">
        <label for="firstName">First Name:</label
        ><input type="text" class="form-control" id="firstName" />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label
        ><input type="text" class="form-control" id="lastName" />
      </div>
    </form>
    <button class="btn btn-primary" id="btnAddUser">Submit</button>`);
    AddUserModule.listen();
  });

  it('can publish adduser message on adduserform submit', () => {
    spyOn(bus, 'publishSync').and.callThrough();
    spyOn(AddUserModule, 'createNewUserId').and.returnValue('23');
    const expectedUser: User = {
      firstName: 'Rupesh',
      lastName: 'Tiwari',
      id: '23'
    };
    $('#firstName').val('Rupesh');
    $('#lastName').val('Tiwari');
    $('#btnAddUser').trigger('click');

    expect(bus.publishSync).toHaveBeenCalledWith(AddUser, expectedUser);
  });
});
