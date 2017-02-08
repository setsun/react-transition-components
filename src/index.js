import React from 'react';
import ReactDOM from 'react-dom';
import FadeTransition from './transitions/FadeTransition';
import SlideTransition from './transitions/SlideTransition';
import ExpandTransition from './transitions/ExpandTransition';
import ScaleTransition from './transitions/ScaleTransition';
import FlipTransition from './transitions/FlipTransition';
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

const FadeExample = () => {
  return (
    <FadeTransition>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
      <button>Hello World!</button>
    </FadeTransition>
  );
}

const SlideExample = () => {
  return (
    <SlideTransition direction="right">
      <p>Hello world!</p>
    </SlideTransition>
  );
}

const FlipExample = () => {
  return (
    <FlipTransition>
      <div style={{height: '200px', width: '200px', backgroundColor: 'white', border: '1px solid black'}} />
    </FlipTransition>
  );
}

const ScaleExample = () => {
  return (
    <ScaleTransition>
      <div style={{height: '200px', width: '200px', backgroundColor: 'white', border: '1px solid black'}} />
    </ScaleTransition>
  );
}

const ExpandExample = () => {
  return (
    <ExpandTransition>
      <div style={{height: '200px', width: '200px', backgroundColor: 'white', border: '1px solid black'}} />
    </ExpandTransition>
  )
}

ReactDOM.render(
  <div style={{padding: '32px'}}>
    <StaggeredExample />
    <FadeExample />
    <SlideExample />
    <ScaleExample />
    <FlipExample />
    <ExpandExample />
  </div>,
  document.querySelector('#app')
);
