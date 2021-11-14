import fs from 'fs';
import Error from '../utils/Error.js';

const error = new Error();

const isFileAccess = (path) => {
  try {
    if (fs.accessSync(path)) return true;
  } catch (e) {
    error.noAccessToFile(path);
  }
};

export default isFileAccess;
