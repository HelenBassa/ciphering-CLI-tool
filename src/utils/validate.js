const validate = (config) => {
  if (!config) return false;

  const ciphers = ['C1', 'C0', 'A', 'R1', 'R0'];
  const configArray = config.split('-');
  let result;

  const isValid = configArray.length > 1 && configArray.every((part) => ciphers.includes(part));
  if (!isValid) {
    result = 'invalid';
  } else {
    result = configArray;
  }

  return result;
};

export default validate;
