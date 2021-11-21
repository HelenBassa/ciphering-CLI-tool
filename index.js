import { pipeline } from 'stream';
import readableStream from './src/streams/input-stream.js';
import cipherStreams from './src/streams/transform-stream.js';
import writebleStream from './src/streams/output-stream.js';

pipeline(
  readableStream,
  ...cipherStreams,
  writebleStream, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
