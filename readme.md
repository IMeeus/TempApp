# Notes

## Terms

React Hot Loader
- Allows live reloading without loss of state.

React Native
- Android & IOS Apps

Preact
- Fast 3kb alternative to React

React360
- VR environments

React-PDF
- Create PDF's for brower, mobile & server

Proton Native
- Native for Windows, Linux & MacOS

CDN Library Loading
- Great for prototyping
- Bad for performance

Minification
- process of minimizing code and markup in webpages and script files.

Transpiling
- Transform code from one language to another that has a similar level of abstraction.

One-way databinding
- As soon as the props change of a component, it is rerendered

Two-way databinding
- A callback given to a child to deliver data back to a parent.

Synthetic event
- the event parameter of an event callback wraps the browser's native event.
- it has the same interface and works similarly across all browsers.

Controlled component (dumb)
- A component that takes its values through props and is notified of changes with callbacks. It is therefor controlled by a parent component.

Uncontrolled component
- A component that stores its state internally. To access this state you must query the DOM using a ref attribute.

Pure component
- A component without state.
- Easy to understand, test & reuse.

Stateful component
- A component with state. 
- More complex and usually lives higher in the hierarchy.

Virtual DOM
- Lives in-memory
- Shadows actual DOM
- React must keep the 2 DOMs in sync. 

PropTypes
- Library used to define property constraints for components

Context API
- React.createContext() can be used to create a context object that can be passed down to children.

Flux Architecture
- Cycle:
  - View: Invoke actions for events triggered by user
  - Action: Passed down to the dispatcher
  - Dispatcher: Dispatches actions to a store
  - Store: Emits events, notifying state change.
  - View: Updates state, according to events.
- Most popular: React Redux (extensive)
  - P1: https://redux.js.org/tutorials/fundamentals/part-1-overview
  - P2: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
  - P3: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
  - Redux Toolkit: simplification & recommended way of building production-like apps with Redux.

Higher-Order Components (HOCs)
- A function that takes a component and returns a new (enhanced) component.
- Example: Code reuse for letting many components subscribe to the same data source.
- https://reactjs.org/docs/higher-order-components.html

Functional Programming Paradigm
- Building programs using expressions and functions without mutating state and data.

Immutability Helper
- https://www.npmjs.com/package/immutability-helper
- An npm tool for complex immutable state updates. 

RTL
- React Testing Library
- Enzyme is dead...(React <= 16)
- kentcdodds: Inventor of RTL
- Cheatsheet
  - https://testing-library.com/docs/react-testing-library/cheatsheet 
- Tips
  - https://develop.sentry.dev/frontend/using-rtl/
  - Ensure that tests resemble how users interact with your code.
  - Use jest-dom assertions: https://github.com/testing-library/jest-dom
  - Use user-event, instead of fire-event: https://testing-library.com/docs/user-event/intro
  - Avoid nesting, when you're testing: https://kentcdodds.com/blog/avoid-nesting-when-youre-testing

Reconciliation
- An API provided by React, so that you don't have to worry about what changes on every update.
- React uses a diffing algorithm to determine what does (not) have to be rerendered.
- https://reactjs.org/docs/reconciliation.html

Memoization
- An optimization technique where results of an expensive function are stored and cached.
- The cached result is returned when the same input occurs again. 
- React.memo()

Fragments
- Lets you group a list of children, without adding nodes to the DOM.

Styling
- Bootstrap
- Carbon
- 

## JSX Quirks

In JSX, attribute names are based on DOM API, not HTML language specs.
Example: 'class' -> 'className'.

Under water, JSX is always transpiled to React.createElement(tag, attributes, content).
You must know this to understand what is (not) allowed when using expressions.
- You must always have one root node.
- For inline conditionals, you must use the ternary operator.

If a JSX attribute is set to undefined, the attribute is not generated in the transpilation.

Comments are with `/* */` & `//`, instead of `<!-- -->`.

JSX automatically protects against XSS, because innerHtml attributes are automatically rendered as inline HTML. So dynamic HTML becomes impossible and can be disabled.

Event properties should be defined as camelCase.

Can't use selected attribute on option tag.
-> Must use value attribute instead.

Can't use inner content with textarea tag.
-> Must use value attribute instead.

## Lifecycle

Mounting (attach to DOM)
1. ctor
2. render
3. componentDidMount
Unmounting
1. componentWillUnmount
Prop change
1. shouldComponentUpdate
2. render
3. componentDidUpdate
State change
1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate

Property update may cause state change, but not other way around.

- constructor:
  - init state to renderable defaults
- componentDidMount:
  - update state on load (fetched)
  - subscribe to listeners
- componentWillUnmount:
  - unsubscribe from listeners
  - cleanup

## Routing

react-router-dom
- React Router for browser routing

react-router-native
- React Router for mobile apps

## Rules

Never update state directly, use setState().
-> setState automatically triggers a rerender.

Use a mutator function in setState.
-> setState is async, thus you shouldn't read state at call-time.
-> a mutator function ensures that the state is read at run-time, by using a callback.

In JSX, don't use inline function declarations.
-> Because in createElement, a new function will be created.
-> React will interpret this as a change to the element and will trigger a rerender.

Use the minimal amount of stateful components.
-> Identity state & all components that depend on it.
-> Find or create a common owner component that owns the data.


## Questions

Why shouldn't state be modified directly?

I don't understand the setState(mutator: function).
-> Must use this because setState is an async operation...

Why does the HTML event API pollute the global namespace and lead to memory leaks?
-> Because the callback is defined globally in JS.

Slide 34: don't understand... Is the issue that the function is recreated? Or is there something more?

Wat als je een constructor nodig hebt bij een function component?

Slide 41:
- What is bypassing the virtual DOM?
- What are uncontrolled components?

Why does React maintain a virtual DOM?

Slide 45:
- What r u trying to say?

Why does array mutation lead to bad performance?

## Questions 2

Use RTL in Slides, instead of Enzyme -> Deprecated.
https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl


## Recap 

Grunt, Gulp, Webpack
XSS
Javascript rendering fundamentals

## Todo

React Redux
Data Fetching
Testing
Performance & Tooling
Bonus Topics
Custom hooks
Exhausive Deps
- https://github.com/facebook/react/issues/14920
Stale Closures 
- https://dmitripavlutin.com/react-hooks-stale-closures/

## Tomorrow

Custom Hooks
Promise vs Observable
Exhausive Deps
- https://github.com/facebook/react/issues/14920
Stale Closures 
- https://dmitripavlutin.com/react-hooks-stale-closures/
(Redux)


Read some more about React.
Create your chess-app frontend.
