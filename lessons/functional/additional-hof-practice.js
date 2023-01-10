/**
 * finds the first element that satisfies a given predicate
 * @param {Function} pred
 * @param {any[]} arr
 * @return {any} the found element or undefined if not found
 */

export function find(pred, arr) {
  // replace me
  return arr.find(pred);
}


/**
 * determines whether at least one element in the array
 * satisfies the predicate
 * @param {Function} pred
 * @param {any[]} arr
 * @return {boolean}
 */

export function some(pred, arr) {
  // replace me
  return arr.some(pred);
}


/**
 * determines whether every element satisfies the predicate
 * @param {Function} pred
 * @param {any[]} arr
 * @return {boolean}
 */

export function every(pred, arr) {
  // replace me
  return arr.every(pred);
}