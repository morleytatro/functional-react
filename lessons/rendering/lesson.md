# Rendering

## Main Concept
- philosophy: rendered app is simply a function of state (note the functional underpinnings)
- React components take current app state and turn it into a DOM representation

## Triggers
- one or more ancestors has had a state change
- internal component state changes (note these are batched)

## Render Tree
```
    App
   /   \
Comp1 Comp2
         \
        Comp3
```

## Virtual DOM
- a "mirrored" version of the actual DOM
- reconciliation modifies the actual DOM so it matches the virtual one
- this process makes the minimal changes to ensure the virtual and actual are in sync
- changes are batched, meaning their timing isn't guaranteed
- batching means that each state change won't necessarily trigger its own re-rendering; rather it'll be part of the next render

## Debugging

### react-devtools
- use to inspect props and state
- use to highlight when renders occur

## Optimizing (decreasing unneeded renders)
- keep state as "low" (localized) as possible in the tree
- wrap components in `memo` calls to prevent re-renders:
  - when rendering involves expensive computations/work
  - when CSS animations could be interrupted by a rerender

## Examples
```jsx
const neverRerender = () => true;
// note that returning true tells React the prop set is effectively
// the same as far as we're concerned

const MyComponent = ({ someProp }) => //...

export default memo(MyComponent, neverRerender);
```

## Memoization Drawbacks
- extra overhead
- premature optimization
- most effective when props stay the same

## Further Reading
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [Render and Commit](https://beta.reactjs.org/learn/render-and-commit)