import * as React from 'react';
import { shallow } from 'enzyme';

import RotateTransition from '../';

describe('RotateTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RotateTransition timeout={300}>
        <div />
      </RotateTransition>
    );
  });

  describe('when the RotateTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the RotateTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
