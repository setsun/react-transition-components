# React Choreography

A set of common transition components built around `react-transition-group`.

React Choreography is roughly 3 kB gzipped, and has peer dependencies on `react` and `react-transition-group`.

`npm i --save react-choreography`

# Components
`react-choreography` with components that provide common transitions out of the box. These components pass down their props to the `Transition` component in `react-transition-group` allowing you to use them in the same way.

- `FadeTransition`
- `SlideTransition`
- `ExpandTransition`
- `ScaleTransition`
- `FlipTransition`
- `RotateTransition`

# API
### `choreography(transitions: Array<TransitionConfig>, styles: Object): React.Component`
The choreography returns a component that renders a `Transition` component with a given configuration from the `transitions` array. The `styles` object also applies any additional CSS styles you need of which will persist across transitions.

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

Additionally, applying multiple CSS transforms is supported out of the box.

#### Example
```
import choreography from 'react-choreography/choreography';

const RotatingExpandFromTopTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0) => `rotate(${start}turn)`,
    getEndStyle: (end = 1) => `rotate(${end}turn)`,
  },
  {
    transition: 'transform',
    getStartStyle: (start = 0) => `scaleY(${start})`,
    getEndStyle: (end = 1) => `scaleY(${end})`,
  }
], {
  transformOrigin: 'top',
});
```

# Presets
`react-choreography` comes out of the box with some common presets, if you want to compose your own transition components quickly.

- opacity
- rotate
- rotate3d { top, bottom, left, right }
- translate { top, bottom, left, right }
- scale { all, vertical, horizontal }

#### Example
```
import choreography from 'react-choreography/choreography';
import { opacity, rotate, scale } from 'react-choreography/presets';

const BatmanWipeTransition = choreography([
  opacity,
  rotate,
  scale.all,
]);
```

![batman_logo](https://user-images.githubusercontent.com/4651424/34085227-29b25146-e35b-11e7-9b44-645e67775330.gif)
