# Functional Programming

## Function Purity/Referential Transparency
- function doesn't touch/modify any values from outside its inner scope
- when called with the same argument(s), always returns the same output
- the function's calling can be replaced by its return value with no changes in observable behavior

## Pure Function Examples
```javascript
const add = (a, b) => a + b
const getFullName = (firstName, lastName) => firstName + ' ' + lastName
```

How about this one?
```javascript
function getSum(arr) {
  const sum = arr.reduce(add, 0);
  console.log({ sum });
  return sum;
}
```

Or this?
```javascript
function removeLast(arr) {
  arr.pop();
  return arr;
}
```

## Benefits of Functional Programming
- code is easier to reason about
- higher level of abstraction
- more focus on what you want to happen (declarative) vs. the how
- intentional partitioning of pure functions/side effects

## Big Picture
- programming generally involves two main actions:
  1. mapping inputs to outputs
  2. triggering side effects
- functional programming draws a more conscious distinction between the two

## Drawbacks
- Steep learning curve
- Involves rethinking some imperative/procedural ways of approaching problems

## Higher Order Functions (HOF)
- Take function(s) as arguments, return function(s) as output, or both

## Examples

### [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- creates a new array by applying a transformation function to each value

```javascript
const double = num => num * 2

const doubled = [1, 2, 3, 4, 5]
  .map(double); // [2, 4, 6, 8, 10]
```

### [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- creates a new array by applying a predicate function to determine which element(s) to keep
- predicate function's job is to take a value and return true (keep) or false (discard)

```javascript
const isEven = num => num % 2 === 0

const evens = [1, 2, 3, 4, 5]
  .filter(isEven); // [2, 4]
```

### [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- reduces, or folds, all the values of an array into a single value
- folded value can be of various types (could even be another array)
- optionally takes a starting value (good to provide this)
- callback accepts 2 arguments: the "accumulator" value and the current value being processed; function should combine them in some way

```javascript
const added = [1, 2, 3, 4, 5]
  .reduce(add, 0); // 15
```

## Exercises
Let's rebuild some built-in higher-order functions (HOFs)! Note that these versions will be standalone functions, not array methods.

## Partial Application
- sometimes we want to "pre-bake" (preload) our functions with arguments
- this allows us to keep our code modular
- we can build up specialized functions from generic ones

## Example
```javascript
// we can pass the arguments in one at a time
// currying a function turns it from accepting more than one argument
// to a series of functions, each accepting one argument
const curriedAdd = a => b => a + b

// alternatively, you can write it as follows:
function curriedAdd(a) {
  return function add(b) {
    return a + b;
  }
}

// note this value is a new function that accepts its "b"
const addFive = curriedAdd(5);

addFive(5); // 10
```

## Further Reading
- [Introduction to Functional Programming](https://www.toptal.com/javascript/functional-programming-javascript)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)

## For Next Time
- memoization
- React rendering/reconciliation