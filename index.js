import * as fs from 'fs';
import { pipeline, Transform } from 'stream';

const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt', { flags: 'a' });

const transformStream = new Transform();
transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(
    chunk.toString().toUpperCase().split('').reverse().join('')
  );
  callback();
};

pipeline(readStream, transformStream, writeStream, (err) => {
  if (err) {
    console.error('Pipeline failed.', err);
  } else {
    console.log('Pipeline succeeded.');
  }
});
