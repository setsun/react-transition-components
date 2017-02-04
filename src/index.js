import React from 'react';
import ReactDOM from 'react-dom';
import FadeTransition from './transitions/FadeTransition';
import SlideTransition from './transitions/SlideTransition';

const FadeExample = () => {
  return (
    <FadeTransition>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
    </FadeTransition>
  );
}

const SlideExample = () => {
  return (
    <SlideTransition direction="right">
      <p>Hello World!</p>
    </SlideTransition>
  );
}

ReactDOM.render(
  <div style={{padding: '32px'}}>
    <FadeExample />
    <SlideExample />
  </div>,
  document.querySelector('#app')
);
