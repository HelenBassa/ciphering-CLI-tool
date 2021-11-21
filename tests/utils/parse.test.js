import { jest } from '@jest/globals';
import parse from '../../src/utils/parse.js'
// import Error from '../../src/utils/Error';

jest.mock('../../src/utils/Error');

describe("Parsing arguments", () => {

  test('should be correct arguments', () => {
    const testArguments = {
      input: ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt', '-o', './output.txt'],
      output: {config: 'C1-C0-A-R1-R0-A-R0-R0-C1-A', input: './input.txt', output: './output.txt'}
    };
    expect(parse(testArguments.input)).toEqual(testArguments.output);
  });

  // test('should not be duplicate any options', () => {
  //   const testOptions = ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt', '-o', './output.txt', '-o', './output.txt'];
  //   parse(testOptions);
  //   expect(Error).toHaveBeenCalled();
  // });

  // test('should be given input and/or output file, should be exist and you can access it', async () => {
  //   const realProcess = process;
  //   const exitMock = jest.fn();
  //   global.process = { ...realProcess, exit: exitMock };
    
  //   const testKeys = ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input111.txt', '-o', './output.txt'];
  //    parse(testKeys);

  //   expect(exitMock).toHaveBeenCalledWith(1);
  //   expect(exitMock).toHaveBeenCalledWith(1);
  //   global.process = realProcess;

  //   mockExit.mockRestore()
  //   mockStdout.mockRestore()
  //   // -------------------------------------------------  //
  //   // const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  //   // const testKeys = ['-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input111.txt', '-o', './output222.txt'];
  //   // parse(testKeys);
  //   // expect(mockExit).toHaveBeenCalledWith(1);
  //   // mockExit.mockRestore()
  //   // mockStdout.mockRestore()

  //   // expect(Error).toHaveBeenCalled();
  // });

})
