const validate = (config) => {
  if (!config) return false;

  const ciphers = ['C1', 'C0', 'A', 'R1', 'R0'];
  const configArray = config.split('-');
  let checkedConfig;

  const isValid = configArray.every((part) => ciphers.includes(part));
  if (!isValid) {
    checkedConfig = 'invalid';
  } else {
    checkedConfig = configArray;
  }

  return checkedConfig;
};

export default validate;
