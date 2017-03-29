`npm install --save react-choreography`

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
