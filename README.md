# React Transition Factory

A component factory for generating easily configurable `<Transition>` components from `react-transition-group` without the boilerplate.

React Transition Factory is roughly 3 kB gzipped, and has peer dependencies on `react` and `react-transition-group`.

`npm i react-transition-factory`

# Motivation
The drive behind `react-transition-factory` comes from being able to create common transition components for React easily using the tried and true `react-transition-group`.

Not only that, but these components need to be easily configurable with a simple API, and minimal context switching.

One of the easiest and most common ways to add a enter/exit transition is using `<CSSTransition>` from `react-transition-group`. However the downfalls of that API is having to create a React component and maintaining separate CSS classes to express your enter/exit states. Not only that, but dynamically changing the `duration` and `easing` in your CSS is nearly impossible without additional tooling. This is even harder to manage if you are transitioning on multiple CSS properties at once.

The other way to add a transition is using `<Transition>` from `react-transition-group`, which allows us to express our transitions using React inline styles. This solves our previous issue since we can dynamically generate all of our styles in JavaScript and not have to maintain a static CSS stylesheet. However there is decent amount of configuration needed, of which you need to know the different transition styles of your component which includes your `default` style, the `entering` style, `entered` style and `exiting` style.

The `transitionFactory` aims to solve that by wrapping `<Transition>` and providing a very simple API for allowing you to express a transition in less than 10 lines of code in the simpliest case.

```
const ScaleTransition = transitionFactory(
  {
    transition: 'transform',
    getStartStyle: (start = 0) => `scale(${start})`,
    getEndStyle: (end = 1) => `scale(${end})`,
  }
);
```

And you're done!
# API
#### `transitionFactory(transitionConfigs: Arguments<TransitionConfig>): React.Component<TransitionProps>`

The `transitionFactory` component factory returns a pre-configured `<Transition>` component given the `TransitionConfig`(s) from the `transitionConfigs` array.

A `TransitionConfig` has the following shape:
```
type TransitionConfig = {
  transition: string,
  getStartStyle: Function,
  getEndStyle: Function,
}

// example
const config: TransitionConfig = {
  transition: 'transform',
  getStartStyle: (start = 0) => `scale(${start})`,
  getEndStyle: (end = 1) => `scale(${end})`,
}
```

It's recommended you pass in default parameters for the functions for `getStartStyle` and `getEndStyle`. These will be the default values, which can be overridden by `this.props.start` and `this.props.end` in your component. In the end, what is returned by the function is up to you, as long as it is valid CSS.

You can also pass down a `style` prop to apply any additional CSS styles you need to persist across all your transition states. Some common CSS properties you may want to persist include `display` and `transformOrigin` which can affect your transition.

```
const RandomTransition = transitionFactory(
  ...
);

return (
  <RandomTransition style={{ transformOrigin: 'top' }}>
    {...}
  </RandomTransition>
);
```

The following are all of the props that are supported by `react-transition-factory`.
```
export type TransitionProps = {
  children: Node,
  start?: string | number | Array<string | number>,
  end?: string | number | Array<string | number>,
  timeout: number | Array<number>,
  easing: string | Array<string>,
};
```

# Presets
`react-transition-factory` comes out of the box with some common presets, if you want to compose your own transition components quickly.

- opacity
- rotate
- rotate3d { top, bottom, left, right }
- translate { top, bottom, left, right }
- scale { all, vertical, horizontal }

### Example
```
import choreography from 'react-transition-factory';
import { opacity, rotate, scale } from 'react-transition-factory';

const BatmanWipeTransition = transitionFactory(
  opacity,
  rotate,
  scale.all,
);
```

![batman_logo](https://user-images.githubusercontent.com/4651424/34085227-29b25146-e35b-11e7-9b44-645e67775330.gif)

# Components
For those who want to get up and running quickly, please check out `react-transition-components` for a component library created using `react-transition-factory` of common use case transitions: https://github.com/Setsun/react-transition-components
