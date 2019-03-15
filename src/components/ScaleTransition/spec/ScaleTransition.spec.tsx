import * as React from 'react';
import { shallow } from 'enzyme';

import ScaleTransition from '../';

describe('ScaleTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ScaleTransition timeout={300}>
        <div />
      </ScaleTransition>
    );
  });

  describe('when the ScaleTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the ScaleTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
