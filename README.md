# React Choreography

A set of common transition components built around `react-transition-group`.

React Choreography is roughly 3 kB gzipped, and has peer dependencies on `react` and `react-transition-group`.

`npm i --save react-choreography`

# Components
### `FadeTransition`
### `SlideTransition`
### `ExpandTransition`
### `ScaleTransition`
### `FlipTransition`
### `RotateTransition`

# API
### `transitionFactory(transitions: Array<TransitionConfig>, styles: Object): React.Component`
The transitionFactory returns a component that renders a `Transition` component with a given configuration from the `transitions` array.

A `TransitionConfig` has the following shape:
```
type TransitionConfig = {
  transitionName: string,
  getEnterStyle: Function,
  getExitStyle: Function,
}

// example

const transitionConfig = {
  transitionName: 'transform',
  getEnterStyle: (start = 0) => `scale(${start})`,
  getExitStyle: (end = 1) => `scale(${end})`,
}
```
