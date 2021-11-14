import caesar from './caesar.js';
import { rot8Shift } from '../utils/constants.js';

const encode = (data) => caesar.encode(data, rot8Shift);
const decode = (data) => caesar.decode(data, rot8Shift);

export default { encode, decode };
