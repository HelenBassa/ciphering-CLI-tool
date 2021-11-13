const validate = (config) => {
  if (!config) return false;

  const ciphers = ['C0', 'C1', 'A', 'R0', 'R1'];
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
