import * as React from 'react';
import { shallow } from 'enzyme';

import FlipTransition from '../';

describe('FlipTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FlipTransition timeout={300}>
        <div />
      </FlipTransition>
    );
  });

  describe('when the FlipTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the FlipTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
