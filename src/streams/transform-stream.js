import { Transform } from 'stream';
import configErrorHandler from '../handlers/config-handler.js';
import caesar from '../ciphers/caesar.js';
import atbash from '../ciphers/atbash.js';
import rot8 from '../ciphers/rot8.js';

const cipher = (mark) => {
  switch (mark) {
  case 'C1':
    return (data) => caesar.encode(data);
  case 'C0':
    return (data) => caesar.decode(data);
  case 'A':
    return (data) => atbash.encode(data);
  case 'R1':
    return (data) => rot8.encode(data);
  case 'R0':
    return (data) => rot8.decode(data);
  default:
    return (data) => data;
  }
};

const config = configErrorHandler();

const cipherStreams = config.map((mark) => {
  const transformStream = new Transform();
  transformStream._transform = (chunk, encoding, callback) => {
    transformStream.push(`${cipher(mark)(chunk.toString())}`);
    callback();
  };

  return transformStream;
});

export default cipherStreams;
