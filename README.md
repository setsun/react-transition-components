`npm install --save react-choreography`

### Included transitions
- FadeTransition
- SlideTransition
- SlideAndFadeTransition
- ExpandTransition
- ScaleTransition
- FlipTransition

### Staggered transitions
To support staggered transitions, use the `StaggeredTransitionDecorator` higher-order component to generate a new staggerable transition. The new transition takes in a property of `staggerTime` to determine when the next element enters.

```
const StaggeredFadeTransition = StaggeredTransitionDecorator(FadeTransition);

function render() {
  return (
    <StaggeredFadeTransition staggerTime={300}>
      {[1,2,3,4,5,6].map((val, index) => {
          return (
            <div
              style={{height: '200px', width: '200px', backgroundColor: '#8200FF'}}
              key={`${val}-${index}`}>
              {val}
            </div>
          );
      })}
    </StaggeredFadeTransition>
  );
}
```

### Example Usage

```
import {
  FadeTransition,
  SlideTransition
} from 'react-choreography';

const PurpleSquare = ({children}) => {
  return (
    <div style={{height: '200px', width: '200px', backgroundColor: '#8200FF'}}>
      {children}
    </div>
  );
}

const FadePurpleSquare = () => {
  return (
    <FadeTransition>
      <PurpleSquare />
    </FadeTransition>
  );
}

const SlidePurpleSquare = () => {
  return (
    <SlideTransition>
      <PurpleSquare />
    </SlideTransition>
  );
}
```

### To-do
- Allow control of transition duration for `appear`, `enter` and `leave`.
- Better docs
- Support for styled-components?
- Add more common usage transitions
