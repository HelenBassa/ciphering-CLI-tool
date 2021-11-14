import shiftHelper from './shift-helper.js';

const encode = (data) =>
  shiftHelper(data, (charCode, start, finish) =>
    String.fromCharCode(finish - (charCode - start))
  )
;

export default { encode };
