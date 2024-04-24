//import { deepFlat } from './deep-flat.js';
//const deepFlat = (arr) => {
//check if the parameter is array
//const isArray = Array.isArray(arr);
// if (isArray) {
//  return arr.flat(Infinity);
// } else {
//  return 'the parameter is not array';
// }
//};
const deepFlat = (array = []) => {
  const result = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...deepFlat(item));
    } else {
      result.push(item);
    }
  });
  return result;
};
