import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman" />
  </div>,
  document.querySelector('#app')
);
