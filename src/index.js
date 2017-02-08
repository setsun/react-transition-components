import React from 'react';
import ReactDOM from 'react-dom';
import FadeTransition from './transitions/FadeTransition';
import SlideTransition from './transitions/SlideTransition';
import StaggeredTransition from './transitions/staggered/StaggeredTransition';

const StaggeredExample = () => {
  return (
    <StaggeredTransition>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
    </StaggeredTransition>
  );
}

ReactDOM.render(
  <div style={{padding: '32px'}}>
    <StaggeredExample />
  </div>,
  document.querySelector('#app')
);
