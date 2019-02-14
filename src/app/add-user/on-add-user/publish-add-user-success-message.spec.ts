import * as bus from 'pubsub-js';
import { AddUser, AddUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';

describe('publish-add-user-success', () => {
  beforeEach(() => {
    spyOn(bus, 'publishSync').and.callThrough();
  });

  it('should add user to store', () => {
    const expectedUser: User = {
      firstName: 'Rupesh',
      lastName: 'Tiwari',
      id: '52'
    };
    bus.publishSync(AddUser, expectedUser);
    expect(store.getUserById('52')).toEqual(expectedUser);
  });

  it('should publish adduser success', () => {
    const user: User = {
      firstName: 'Rupesh',
      lastName: 'Tiwari',
      id: '53'
    };

    bus.publishSync(AddUser, user);

    expect(bus.publishSync).toHaveBeenCalledWith(AddUserSuccess, user.id);
  });
});
