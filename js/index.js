import React from 'react';
import ReactDOM from 'react-dom';
import FadeTransition from './transitions/FadeTransition';

const HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <FadeTransition>
    <HelloWorld greetTarget="Batman" />
  </FadeTransition>,
  document.querySelector('#app')
);
