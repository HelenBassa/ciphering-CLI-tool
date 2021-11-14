import Error from '../../src/utils/Error.js';
import validate from '../../src/utils/validate.js';
import { config } from '../../src/utils/options.js';

const configErrorHandler = () => {
  const error = new Error();
  const validConfig = validate(config);

  if (!validConfig) {
    error.missingConfig();
  }

  if (validConfig === 'invalid') {
    error.wrongConfig();
  };

  return true;
};

export default configErrorHandler;
