# React Choreography

A set of common animation components built around `react-transition-group`.

React Choreography is roughly 3 kB gzipped, and has peer dependencies on `react` and `react-transition-group`.

`npm install --save react-choreography`

### Included transitions
- FadeTransition
- SlideTransition
- ExpandTransition
- ScaleTransition
- FlipTransition
- RotateTransition

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
- Better docs
- Add more common usage transitions
