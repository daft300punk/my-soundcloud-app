import getTimeString from '../../src/util/getTimeString';
import expect from 'expect';

describe('Utility function', () => {
  it('should return correct time string', () => {
    const expectedTime = '1:30';
    expect(getTimeString(90))
    .toEqual(expectedTime);
  });
});
