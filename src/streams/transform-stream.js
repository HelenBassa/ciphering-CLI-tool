import { Transform } from 'stream';

const transformStream = new Transform();

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(
    chunk.toString().toUpperCase().split('').reverse().join('')
  );
  callback();
};

export default transformStream;
