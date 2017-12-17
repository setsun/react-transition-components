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
### `choreography(transitions: Array<TransitionConfig>, styles: Object): React.Component`
The choreography returns a component that renders a `Transition` component with a given configuration from the `transitions` array.

A `TransitionConfig` has the following shape:
```
type TransitionConfig = {
  transition: string,
  getStartStyle: Function,
  getEndStyle: Function,
}

// example
const transitionConfig = {
  transition: 'transform',
  getStartStyle: (start = 0) => `scale(${start})`,
  getEndStyle: (end = 1) => `scale(${end})`,
}
```

It's recommended you pass in default parameters for the functions for `getStartStyle` and `getEndStyle`. This will be the default values, which can be overridden by `this.props.start` and `this.props.end` in your component. In the end, what is returned by the function is up to you, as long as it is valid CSS.

# Presets
`react-choreography` comes out of the box with some common presets, if you want to compose your own transitions components quickly.

- opacity
- rotate
- rotate3d { top, bottom, left, right }
- translate { top, bottom, left, right }
- scale { all, vertical, horizontal }

```
import choreography from 'react-choreography/choreography';
import { opacity, rotate, scale } from '../presets';

const FadingRotatingScaleTransition = choreography([
  opacity,
  rotate,
  scale.all,
]);
```
