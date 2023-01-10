# JS/React Workshops

## Functional Programming
- callbacks overview
- filter (and predicates), map, reduce
  - other interesting methods: find, every, some
- partial application / currying?

## React render cycle
- what causes component rerenders?
  - element changes or props change (typically through a parent re-render)
  - object reference comparisons

## State Management
- gotchas and how to work with limitations
  - duplicate / derived state and syncing issues
  - stale state
  - accessing state immediately after setting it
  - routing to the same component
- complex state management
  - objects
  - arrays (actually a special kind of object)
- lifting state (and its limits)

## Advanced State Management
- useReducer

## Powerful Hooks
- useEffect (touch on how this can intersect with stale state)
- useRef

- contexts
- other global state?
- useMemo (memoizing data) and useCallback (memoizing functions): often a premature optimization
  - [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- benefits of pure functions and bringing them out of contexts
  - lifting up state when needed
  - useState and some of its pitfalls (avoiding extra state when possible)
  - useReducer

## Custom Hooks
- abstracting effects/state management for reuse
- let's build a useCurrentUser hook to track the user across the app

## Advanced Component Architecture
- options for exposing internal state to calling code
  - exporting lower-level hooks for greatest flexibility
  - exporting a shared context to use
  - useRef with useImperativeHandle
  - the renderProp pattern