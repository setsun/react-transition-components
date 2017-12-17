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
  start: number,
  end: number,
}

// example

const transitionConfig = {
  transitionName: 'transform',
  getEnterStyle: start => `scale(${start})`,
  getExitStyle: end => `scale(${end})`,
  start: 0,
  end: 1,
}
```
