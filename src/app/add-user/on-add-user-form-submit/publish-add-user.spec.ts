import * as bus from 'pubsub-js';
import * as $ from 'jquery';
import { AddUser } from '../../messages';
import { publishAddUserModule } from './publish-add-user';

describe('publish-add-user', () => {
  beforeAll(() => {
    $('body').append(`<form class="form">
<div class="form-group">
  <label for="">Name:</label
  ><input type="text" class="form-control" id="name" />
</div>
</form>
<button class="btn btn-primary" id="btnAddUser">Submit</button>`);
    publishAddUserModule.listen();
  });
  beforeEach(() => {
    spyOn(bus, 'publishSync');
  });
  it('publishes adduser message on add user form submit', () => {
    spyOn(publishAddUserModule, 'getUserId').and.returnValue('23');
    $('#name').val('John');
    $('#btnAddUser').trigger('click');
    const user = { name: 'John', id: '23' };
    expect(bus.publishSync).toHaveBeenCalledWith(AddUser, user);
  });
});
