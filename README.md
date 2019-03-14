# React Transition Components

An animation component library & higher-order component for generating easily configurable `<Transition>` components from `react-transition-group`.

`react-transition-components` is roughly 2 kB gzipped, has peer dependencies on `react` and `react-transition-group`, and supports `webpack` tree-shaking by default: https://bundlephobia.com/result?p=react-transition-components

`npm i react-transition-components`

# Motivation
The drive behind `react-transition-components` comes from being able to create common transition components for React easily using the tried and true `react-transition-group`.

Not only that, but these components need to be easily configurable with a simple API, and minimal context switching.

One of the easiest and most common ways to add a enter/exit transition is using `<CSSTransition>` from `react-transition-group`. However the downfalls of that API is having to create a React component and maintaining separate CSS classes to express your enter/exit states. Not only that, but dynamically changing the `duration` and `easing` in your CSS is nearly impossible without additional tooling. This is even harder to manage if you are transitioning on multiple CSS properties at once.

The other way to add a transition is using `<Transition>` from `react-transition-group`, which allows us to express our transitions using React inline styles. This solves our previous issue since we can dynamically generate all of our styles in JavaScript and not have to maintain a static CSS stylesheet.

`react-transition-components` aims to provide a component library of common UI transitions, and to make it easier to create re-usable transition components by providing a `createTransition` higher-order component for wrapping `<Transition>` and providing a very simple API for allowing you to express a transition in 10 lines of code in the simplest case:

```jsx
import { createTransition } from 'react-transition-components';

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0)' },
  exited: { transform: 'scale(0)' },
};

export const ScaleTransition = createTransition(transitionStyles);
```

# API
### `createTransition(transitionStyles, defaultStyle, transitionProperty)`

The `createTransition` higher-order component returns a pre-configured `<Transition>` component that allows you to create transition components that can be used immediately, and can be configured via `props` as your animation needs change. `createTransition` has the following type signature:

```ts
type createTransition = (
  transitionStyles: TransitionStyles | LazyTransitionStyles,
  defaultStyle?: React.CSSProperties | LazyCSSProperties,
  transitionProperty?: string,
) => React.SFC<TransitionProps>
```

Full TypeScript typings can be found at: https://github.com/Setsun/react-transition-components/blob/master/src/types/index.ts

#### `transitionStyles: TransitionStyles | LazyTransitionStyles`
The `transitionStyles` argument is what drives your component animation. This can take the form of an object of the following shape for static transitions:

```jsx
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const FadeTransition = createTransition(transitionStyles);
```

For more configuration, `transitionStyles` can also be a function which is passed down the current component `props`. This allows your styles to be generated on demand, and be dynamic passed on changing animation needs:

```jsx
const transitionStyles = (props) => {
  const { start, end } = props;

  return {
    entering: { opacity: start },
    entered: { opacity: end },
    exiting: { opacity: start },
    exited: { opacity: start },
  };
};

const FadeTransition = createTransition(transitionStyles);

FadeTransition.defaultProps = {
  start: 0,
  end: 1,
};
```

#### `defaultStyle: React.CSSProperties | LazyCSSProperties`
The `defaultStyle` object is a style object to be passed down to your `React` component for any persistent styles you want your component to have throughout each transition state.

```jsx
const transitionStyles = {...};

const defaultStyle = {
  transformOrigin: 'top',
  perspectiveOrigin: 'top',
  perspective: '0'
};

const FlipTopTransition = createTransition(
  transitionStyles,
  defaultStyle,
);
```

Similar to `transitionStyles`, `defaultStyle` can also be a function to generate your default styles based on component `props`.

```jsx
const transitionStyles = {...};

const defaultStyleByDirection = {
  top: { transformOrigin: 'top', perspectiveOrigin: 'top', perspective: '0' },
  bottom: { transformOrigin: 'bottom', perspectiveOrigin: 'bottom', perspective: '0' },
  left: { transformOrigin: 'left', perspectiveOrigin: 'left', perspective: '0' },
  right: { transformOrigin: 'right', perspectiveOrigin: 'right', perspective: '0' }
};

const defaultStyle = (props) => {
  const { direction } = props;

  return defaultStyleByDirection[direction];
};

const FlipTransition = createTransition(
  transitionStyles,
  defaultStyle,
);

FlipTransition.defaultProps = {
  direction: 'top',
};
```

#### `transitionProperty: string`
The `transitionProperty` argument is a CSS `transition-property` value that can be passed down as an optimization. By default, it is set to `all`.

# Components
- `FadeTransition`
- `SlideTransition`
- `ScaleTransition`
- `FlipTransition`
- `RotateTransition`
