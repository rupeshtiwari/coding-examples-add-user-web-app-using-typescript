import { addUser, getUserById } from './store';

describe('store', () => {
  it('addUser', () => {
    const user = { firstName: 'Ryan', lastName: 'Mosely', id: '1' };
    expect(() => addUser(user)).not.toThrow();
  });

  it('getUserById', () => {
    const user = { firstName: 'Ana', lastName: 'Rose', id: '2' };
    addUser(user);
    const result = getUserById('2');
    expect(result).toEqual(user);
  });
});
