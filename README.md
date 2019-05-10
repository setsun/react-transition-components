# React Transition Components

An animation component library & higher-order component for generating easily configurable `<Transition>` components from `react-transition-group`.

`react-transition-components` is roughly 3 kB gzipped, has peer dependencies on `react` and `react-transition-group`, and supports `webpack` tree-shaking by default: https://bundlephobia.com/result?p=react-transition-components

`npm i react-transition-components`

# Motivation
The drive behind `react-transition-components` comes from being able to create common transition components for React easily using the tried and true `react-transition-group`.

Not only that, but these components need to be easily configurable with a simple API, and minimal context switching.

`react-transition-components` aims to provide a component library of common UI transitions, and to make it easier to create re-usable transition components by providing a `createTransition` higher-order component for wrapping `<Transition>` and providing a very simple API for allowing you to express a transition in **6** lines of code in the simplest case:

```jsx
import { createTransition } from 'react-transition-components';

export const ScaleTransition = createTransition({
  from: { transform: 'scale(0)' },
  enter: { transform: 'scale(1)' }
});
```

# Components
`react-transition-components` comes out of the box with multiple components that work out of the box. A Storybook is live at:  https://setsun.io/react-transition-components

Additionally, all components created via `createTransition` will support all props from the `<Transition>` component from `react-transition-group` (https://reactcommunity.org/react-transition-group/transition).

The components also have extended functionality and have the following base props for customizing transition properties and timings:

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

# API
### `createTransition(config: TransitionConfig)`

The `createTransition` higher-order component returns a pre-configured `<Transition>` component that allows you to create transition components that can be used immediately, and can be configured via `props` as your animation needs change. `createTransition` has the following type signature:

```ts
type TransitionConfig = {
  from: React.CSSProperties | LazyCSSProperties;
  enter: React.CSSProperties | LazyCSSProperties;
  exit?: React.CSSProperties | LazyCSSProperties;
  transitionProperty?: string;
}

type createTransition = (config: TransitionConfig) => React.SFC<TransitionProps>
```

Full TypeScript typings can be found at: https://github.com/Setsun/react-transition-components/blob/master/src/types/index.ts

#### `from: React.CSSProperties | LazyCSSProperties`
The `from` property is the starting style of your transition component. This is the state where your component animation will start. If the `exit` property is not specified, this is also the style that your component will transition to when it is exiting.

#### `enter: React.CSSProperties | LazyCSSProperties`
The `enter` property is the entering style of your transition component. This is the state where your component animation will animate to, and it's final resting state.

#### `exit?: React.CSSProperties | LazyCSSProperties`
The `exit` property is the exiting style of your transition component. This is an optional property, and can be useful for specifying a state to animate to, that isn't necessarily the same as your `from` state.

```jsx
const FadeTransition = createTransition({
  from: (props) => ({ opacity: props.start }),
  enter: (props) => ({ opacity:  props.end })
});

FadeTransition.defaultProps = {
  start: 0,
  end: 1,
};
```
