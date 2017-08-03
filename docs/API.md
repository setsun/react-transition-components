
## API

### `CSSTransitionListener(WrappedComponent)`
`CSSTransitionListener` utilizes the native `transitionstart` and `transitionend` browser events to determine if a transition has started or ended and fires off the associated actions when those events have triggered. This solution is **web-only**, so usage with React Native is not supported. The returned component can also take in an optional `animationId` property to uniquely identify the animation.

#### `onTransitionStart(event, animationId)`
Fires when the `transitionstart` event triggers. Returns the native event as well as the `animationId` if it exists. Use this callback to perform any action you want to happen after the transition starts.

#### `onTransitionEnd(event, animationId)`
Fires when the `transitionend` event triggers. Returns the native event as well as the `animationId` if it exists. Use this callback to perform any action you want to happen after the transition ends.

```js
import React from 'react'
import CSSTransitionListener from 'react-choreography/CSSTransitionListener'

/* Example SASS
.animated-button
  color: black
  background-color: white
  transition: all 0.3s ease-in

  &.active
    color: white
    background-color: black
*/

class ExampleButton extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {active: false}
  }

  render() {
    const {active} = this.state;

    return (
      <button
        className={`example-button ${active ? 'active' : ''}`}
        onClick={() => {this.setState({active: !active})}}>
        Lorem Ipsum
      </button>
    )
  }
}

const ButtonWithCSSTransitionListeners = CSSTransitionListener(ExampleButton);

const renderAnimatedButton = () => {
  return (
    <ButtonWithCSSTransitionListeners
      onTransitionStart={(event, animationId) => {
        console.log(`${animationId} - Transition Started!`);
      }}
      onTransitionEnd={(event, animationId) => {
        console.log(`${animationId} - Transition Ended!`);
      }}
    />
  );
}
```

### `CSSAnimationListener(WrappedComponent)`
`CSSAnimationListener` utilizes the native `animationstart` and `animationend` browser events. The API is the same as `CSSTransitionListener` except that the property callbacks are `onAnimationStart` and `onAnimationEnd`.

#### `onAnimationStart(event, animationId)`
Fires when the `animationstart` event triggers. Returns the native event as well as the `animationId` if it exists. Use this callback to perform any action you want to happen after the transition starts.

#### `onAnimationEnd(event, animationId)`
Fires when the `animationend` event triggers. Returns the native event as well as the `animationId` if it exists. Use this callback to perform any action you want to happen after the transition ends.

## Prospective Integration with Redux / Global State
Both `CSSAnimationListener` and `CSSTransitionListener` return an `animationId` from their respective callbacks. One can imagine a redux store where you store a map of all the animation statuses, that is keyed by the `animationId`.

Animations can have 3 states, `null`, 'STARTED', and `ENDED`.

The motivation behind this is to be able to manage animations globally, similar to some approaches to how network request statues are managed in redux. This way, more complex animations / interactions that are determined by animation statuses can be more easily managed. Especially if these interactions are managed in very different parts of a complex component tree.
