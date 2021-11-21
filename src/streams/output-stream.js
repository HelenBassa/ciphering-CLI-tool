import fs from 'fs';
import isFileAccess from '../handlers/access-handler.js';
import { output } from '../utils/options.js';

const writeStream = () => {
  isFileAccess(output);
  return fs.createWriteStream(output, { flags: 'a' });
};

const writebleStream = output ? writeStream() : process.stdout;

export default writebleStream;
