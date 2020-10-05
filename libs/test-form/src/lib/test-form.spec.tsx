import { log } from '../index';

const testInput = { name: 'Zach' };

describe('Testing submit button', () => {
  it('should log the input values in the form to the console', () => {
    expect(log(testInput)).toBeNull();
  });
});
