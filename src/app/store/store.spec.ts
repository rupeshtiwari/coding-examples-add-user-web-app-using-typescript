import { addUser, getUserById } from './store';

describe('store', () => {
  it('addUser', () => {
    const user = { name: 'rupesh', id: '1' };
    expect(() => addUser(user)).not.toThrow();
  });

  it('getUserById', () => {
    const user = { name: 'rupesh', id: '1' };
    addUser(user);
    const result = getUserById('1');
    expect(result).toEqual(user);
  });
});
