# React Transition Components
[![npm-downloads](https://img.shields.io/npm/dm/react-transition-components.svg)](https://www.npmjs.com/package/react-transition-components)

An animation component library & higher-order component for generating easily configurable `<Transition>` components from `react-transition-group`.

`react-transition-components` is 3 kB gzipped, has peer dependencies on `react` and `react-transition-group`, and supports `webpack` tree-shaking by default: https://bundlephobia.com/result?p=react-transition-components

```
yarn install react-transition-components
```

## Motivation

`react-transition-components` has 2 goals:
- Provide a component library of common lightweight UI transitions that are configurable on durations, delays, easings, and other animation values.
- Make it easy to create configurable transition components by providing a `createTransition` higher-order component.

The aforementioned `createTransition` higher-order component wraps `<Transition>` from `react-transition-group`, maintains backwards compatibility with its props, and enhances it with configurable timings, delays, and easings. It provides a concise API, allowing you to express an enter/exit CSS transition in **6** lines of code in the simplest case:

```jsx
import { createTransition } from 'react-transition-components';

const CustomTransition = createTransition({
  from: { transform: 'scale(0) skew(45deg)', opacity: 0 },
  enter: { transform: 'scale(1) skew(0deg)', opacity: 1 }
});
```

## Component Library
`react-transition-components` comes with multiple components that work out of the box. A Storybook is live at:  https://setsun.io/react-transition-components

The following components are included, and implement the most common CSS transitions:
- FadeTransition for `opacity` animations
- HeightTransition for `height` animations
- TranslateTransition for `translate3d` animations
- ScaleTransition for `scale3d` animations
- RotateTransition for `rotate3d` animations
- SkewTransition for `skew` animations
- ClipTransition for `clip-path` animations

## Higher-order component API
### `createTransition(config: TransitionConfig)`

The `createTransition` higher-order component returns a pre-configured `<Transition>` component that allows you to create transition components that can be used immediately, and can be configured via `props` as your animation needs change.

All components created via `createTransition` support all props from the `<Transition>` component from `react-transition-group` (https://reactcommunity.org/react-transition-group/transition).

These generated components also have extended functionality and have the following base props for customizing transition properties and timings:
```ts
type Props = {
  // a custom duration for your transition, with the ability
  // to also have separate enter / exit durations
  duration?: number | {
    enter: number;
    exit: number;
  };

  // a custom delay for your transition, with the ability
  // to also have separate enter / exit delays
  delay?: number | {
    enter: number;
    exit: number;
  };

  // a CSS transition easing curve
  easing?: string;

  // React children can either be a ReactNode, or a function that takes
  // a style and status, and returns a ReactNode
  children: React.ReactNode | ((style: React.CSSProperties, status: TransitionStatus) => React.ReactNode);
}
```

`createTransition` has the following type signature:
```ts
type TransitionConfig = {
  from: React.CSSProperties | LazyCSSProperties;
  enter: React.CSSProperties | LazyCSSProperties;
  exit?: React.CSSProperties | LazyCSSProperties;
  transitionProperty?: string;
}

type createTransition = (config: TransitionConfig) => React.SFC<TransitionProps>
```

#### `from: React.CSSProperties | LazyCSSProperties`
The `from` property is the starting style of your transition component. This is the first state that your component animation will animate from. If the `exit` property is not specified, the `from` property is also used for the exit animation.

#### `enter: React.CSSProperties | LazyCSSProperties`
The `enter` property is the entering style of your transition component. This is the state where your component animation will animate to, and its final resting state.

#### `exit?: React.CSSProperties | LazyCSSProperties`
The `exit` property is the exiting style of your transition component. This is an optional property for explicitly specifying a state to animate to when exiting, especially if you want an `exit` animation that is asymmetric from your `enter` animation.

### Example Recipes

#### Symmetric Enter/Exit Transition
```jsx
const FadeTransition = createTransition({
  from: { opacity: 0 },
  enter: { opacity: 1 }
});
```

#### Asymmetric Enter/Exit Transition
```jsx
const ScaleEnterClipExitTransition = createTransition({
  from: {
    transform: 'scale(0.5)',
    opacity: 0,
    clipPath: 'circle(100% at 50% 50%)'
  },
  enter: {
    transform: 'scale(1)',
    opacity: 1,
    clipPath: 'circle(100% at 50% 50%)'
  },
  exit: {
    transform: 'scale(1)',
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)'
  },
});
```

#### Configurable Transition
```jsx
const ClipScaleFadeTransition = createTransition({
  from: (props) => {
    return {
      opacity: props.fade ? 0 : 1,
      transform: `scale(${props.scale.start})`,
      clipPath: 'circle(100% at 50% 50%)'
    }
  },
  enter: (props) => {
    return {
      opacity: 1,
      transform: `scale(${props.scale.end})`
      clipPath: 'circle(100% at 50% 50%)'
    }
  },
  exit: (props) => {
    return {
      opacity: props.fade ? 0 : 1,
      transform: `scale(${props.scale.start})`,
      clipPath: 'circle(0% at 50% 50%)'
    }
  },
});

ClipScaleFadeTransition.defaultProps = {
  fade: true,
  scale: {
    start: 0.5,
    end: 1,
  }
}

```
