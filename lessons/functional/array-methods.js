/**
 * @param {Function<T, U>} mapper a mapping function
 * @param {Array<T>} arr an array to map
 * @return {Array<U>} a new array with the elements mapped
 */

export function map(mapper, arr) {
  // replace me
  return arr.map(mapper);
}


/**
 * @param {Function<boolean>} pred a predicate function (returns a boolean)
 * @param {Array<T>} arr an array to filter
 * @return {Array<T>} a new array with only the items satisfying the predicate
 */

export function filter(pred, arr) {
  // replace me
  return arr.filter(pred);
}


/**
 * @param {Function} reducer your reducer function (combines two elements)
 * @param {any} startVal the starting value prior to the reduction
 * @param {Array<T>} arr an array to reduce to a single element
 */

export function reduce(reducer, startVal, arr) {
  // replace me
  return arr.reduce(reducer, startVal);
}