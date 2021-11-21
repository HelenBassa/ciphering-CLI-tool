import { jest } from '@jest/globals';
import parse from '../../src/utils/parse.js'

jest.mock('../../src/utils/Error');

describe("Parsing arguments", () => {

  test('should be correct arguments', () => {
    const testArguments = {
      input: ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt', '-o', './output.txt'],
      output: {config: 'C1-C0-A-R1-R0-A-R0-R0-C1-A', input: './input.txt', output: './output.txt'}
    };
    expect(parse(testArguments.input)).toEqual(testArguments.output);
  });

})
