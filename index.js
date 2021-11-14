import { pipeline } from 'stream';
import readableStream from './src/streams/input-stream.js';
import writebleStream from './src/streams/output-stream.js';
import transformStream from './src/streams/transform-stream.js';
import configErrorHandler from './src/handlers/config-handler.js';

configErrorHandler();

pipeline(readableStream, transformStream, writebleStream, (err) => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});
