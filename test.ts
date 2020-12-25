import hello, { remove } from './main';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Remove function', () => {

    const names = [1, 3, 2, 2, 1]
    const re = [1, 3, 2]
  it('should return remove funfction', () => {
    const result = remove(names);
    expect(result).to.equal(re);
  });
});