import fs from 'fs';
import isFileAccess from '../handlers/access-handler.js';
import { input } from '../utils/options.js';

const readStream = () => {
  isFileAccess(input);
  return fs.createReadStream(input, 'utf8');
};

const readableStream = input ? readStream() : process.stdin;

export default readableStream;
