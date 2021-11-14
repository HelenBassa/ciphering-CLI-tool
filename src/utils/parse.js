import Error from './Error.js';

const parse = (arr) => {
  const error = new Error();
  const options = {};
  const optionsAliasAndFull = {
    config: ['-c', '--config'],
    input: ['-i', '--input'],
    output: ['-o', '--output']
  };

  arr.forEach((element, index) => {
    for (const key in optionsAliasAndFull) {
      if (optionsAliasAndFull[key].includes(element)) {
        if (key in options) {
          error.duplicateOption(key);
        }
        options[key] = arr[index + 1];
      }
    }
  });

  return options;
};

export default parse;
