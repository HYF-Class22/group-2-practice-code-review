export const filterIntersection = (array = [], values = []) => {
  // filter values that are in both the first and the second arrays
  const result = array.filter((x) => values.includes(x));
  //  use new Set() to remove any duplicated values
  const noDuplicateResult = new Set(result);
  //  return in array
  return [...noDuplicateResult];
};
