import shiftHelper from './shift-helper.js';
import { caesarShift, EnglishAlphabetLength as length } from '../utils/constants.js';

const encode = (data, shift = caesarShift) =>
  shiftHelper(data, (charCode, start) =>
    String.fromCharCode(start + ((charCode - start + shift) % length))
  );

const decode = (data, shift = caesarShift) =>
  shiftHelper(data, (charCode, start) =>
    String.fromCharCode(start + ((charCode - start - shift + length) % length))
  );

export default { encode, decode };
