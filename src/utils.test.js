import { get, equal } from './utils';

describe('get', () => {
  it('get...', () => {
    const state = {
      name: '박세진',
    };

    const f = get('name');
    const g = get('age');

    expect(f(state)).toBe('박세진');
    expect(g(state)).toBeUndefined();
  });
});

describe('equal', () => {
  it('equal', () => {
    const state = {
      name: '박세진',
    };

    const f = equal('name', '박세진');
    const g = equal('name', '김아무개');

    expect(f(state)).toBeTruthy();
    expect(g(state)).toBeFalsy();
  });
});
