import reverse from '../src/index';

test('переворот строки', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});