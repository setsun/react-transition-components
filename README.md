# React Transition Components

An animation component library & higher-order component for generating easily configurable `<Transition>` components from `react-transition-group` without the boilerplate.

React Transition Components is roughly 1 kB gzipped, and has peer dependencies on `react` and `react-transition-group`.

`npm i react-transition-group`

# Motivation
The drive behind `react-transition-components` comes from being able to create common transition components for React easily using the tried and true `react-transition-group`.

Not only that, but these components need to be easily configurable with a simple API, and minimal context switching.

One of the easiest and most common ways to add a enter/exit transition is using `<CSSTransition>` from `react-transition-group`. However the downfalls of that API is having to create a React component and maintaining separate CSS classes to express your enter/exit states. Not only that, but dynamically changing the `duration` and `easing` in your CSS is nearly impossible without additional tooling. This is even harder to manage if you are transitioning on multiple CSS properties at once.

The other way to add a transition is using `<Transition>` from `react-transition-group`, which allows us to express our transitions using React inline styles. This solves our previous issue since we can dynamically generate all of our styles in JavaScript and not have to maintain a static CSS stylesheet. However there is decent amount of configuration needed, of which you need to know the different transition styles of your component which includes your `default` style, the `entering` style, `entered` style and `exiting` style.

`react-transition-components`  aims to solve that by providing a higher-order component for wrapping `<Transition>` and providing a very simple API for allowing you to express a transition in less than 10 lines of code in the simplest case.

# API
#### `createTransition(defaultStyle, transitionStyles, transitionProperty): React.Component`

The `createTransition` higher-order component returns a pre-configured `<Transition>` component
