import * as bus from 'pubsub-js';
import { User } from '../store/user';
import { AddUser, AddUserSuccess } from '../messages';
import { getUserById } from '../store/store';

describe('on-add-user', () => {
  beforeEach(() => {
    // spy the publishsync function from bus.
    // note we are using .and.callThrough() to make sure the original function is getting called.

    spyOn(bus, 'publishSync').and.callThrough();
  });

  it('should add user', () => {
    // someone publish message with user
    const user = { name: 'rupesh', id: 1 };
    bus.publishSync(AddUser, user);

    // i will get a message addUser
    // onAddUser message I will add the user to the store
    const result = getUserById(1);
    expect(result).toEqual(user);
    // then publish the addusersuccess message.
  });

  it('when AddUser message received then addusersuccess message is published on successful add', () => {
    // someone publish message with user
    const user = { name: 'rupesh', id: 2 };

    bus.publishSync(AddUser, user);

    expect(bus.publishSync).toHaveBeenCalledWith(AddUserSuccess, user.id);
  });
});
