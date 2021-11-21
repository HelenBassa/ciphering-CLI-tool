import { charsIntervals } from './constants.js';

export const charCodesIntervals = charsIntervals.map(([startChar, finishChar]) => {
  const startCharCode = startChar.codePointAt(0);
  const finishCharCode = finishChar.codePointAt(0);

  return [startCharCode, finishCharCode];
});
