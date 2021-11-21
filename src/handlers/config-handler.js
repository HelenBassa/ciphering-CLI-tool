import Error from '../../src/utils/Error.js';
import validate from '../../src/utils/validate.js';
import { config } from '../../src/utils/options.js';

const configErrorHandler = () => {
  const error = new Error();
  const checkedConfig = validate(config);

  if (!checkedConfig) {
    error.missingConfig();
  }

  if (checkedConfig === 'invalid') {
    error.invalidConfig();
  };

  return checkedConfig;
};

export default configErrorHandler;
