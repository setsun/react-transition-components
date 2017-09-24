import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class TransitionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: true };
  }

  render() {
    return (
      <div>
        <PrimaryButton
          onClick={() => this.setState({ active: !this.state.active })}
          style={{ marginBottom: '1rem' }}
        >
          Toggle Animation
        </PrimaryButton>
        <TransitionGroup>
          {this.state.active && this.props.children}
        </TransitionGroup>
      </div>
    );
  }
}

export default storyFn => (
  <TransitionGroupContainer>{storyFn()}</TransitionGroupContainer>
);
