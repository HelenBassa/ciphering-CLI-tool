import * as fs from 'fs';
import { pipeline, Transform } from 'stream';
import Error from './Error.js';
import parse from './parse.js';
import validate from './validate.js';

const error = new Error();
const options = parse(process.argv.slice(2));
const config = validate(options.config);

if (!config) {
  error.missingConfig();
}

if (config === 'invalid') {
  error.wrongConfig();
}

const isFileAccess = (path) => {
  try {
    if (fs.statSync(path)) return true;
  } catch (e) {
    error.noAccessToFile(path);
  }
};

const readStream = () => {
  isFileAccess(options.input);
  return fs.createReadStream(options.input, 'utf8');
};

const writeStream = () => {
  isFileAccess(options.output);
  return fs.createWriteStream(options.output, { flags: 'a' });
};

const readableStream = options.input ? readStream() : process.stdin;
const writebleStream = options.output ? writeStream() : process.stdout;

const transformStream = new Transform();

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(
    chunk.toString().toUpperCase().split('').reverse().join('')
  );
  callback();
};

pipeline(readableStream, transformStream, writebleStream, (err) => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});
