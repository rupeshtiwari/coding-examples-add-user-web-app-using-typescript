import * as bus from 'pubsub-js';
import { User } from '../store/user';
import { AddUser } from '../messages';
import { getUserById } from '../store/store';

describe('on-add-user', () => {
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

    spyOn(bus, 'publishSync');
    bus.publishSync(AddUser, user);
    
    expect(bus.publishSync).toHaveBeenCalledWith(AddUser, user.id);
  });
});
