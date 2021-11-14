import { charCodesIntervals } from '../utils/charCode-intervals.js';

const shiftHelper = (data, shiftFunc) => {
  const charsArray = data.split('');
  const shiftedCharsArray = charsArray.map((char) => {
    const charCode = char.charCodeAt(0);
    let shiftedChar = char;

    charCodesIntervals.forEach(([startCharCode, finishCharCode]) => {
      if (startCharCode <= charCode && charCode <= finishCharCode) {
        shiftedChar = shiftFunc(charCode, startCharCode, finishCharCode);
      }
    });

    return shiftedChar;
  });

  return shiftedCharsArray.join('');
};

export default shiftHelper;
