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
    <div style={{padding: '16px'}}>
      <StaggeredTransition>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
      </StaggeredTransition>
    </div>
  );
}

const FadeExample = () => {
  return (
    <div style={{padding: '16px'}}>
      <FadeTransition>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
      </FadeTransition>
    </div>
  );
}

const SlideExample = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '16px'}}>
      <SlideTransition direction="top">
        <span>Hello world!</span>
      </SlideTransition>
      <SlideTransition direction="left">
        <span>Hello world!</span>
      </SlideTransition>
      <SlideTransition direction="bottom">
        <span>Hello world!</span>
      </SlideTransition>
      <SlideTransition direction="right">
        <span>Hello world!</span>
      </SlideTransition>
    </div>
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
    <div style={{display: 'flex'}}>
      <div style={{padding: '8px'}}>
        <ScaleExample />
      </div>
      <div style={{padding: '8px'}}>
        <FlipExample />
      </div>
      <div style={{padding: '8px'}}>
        <ExpandExample />
      </div>
    </div>
  </div>,
  document.querySelector('#app')
);
