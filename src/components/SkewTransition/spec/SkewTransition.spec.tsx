import * as React from 'react';
import { shallow } from 'enzyme';

import SkewTransition from '../';

describe('SkewTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SkewTransition timeout={300}>
        <div />
      </SkewTransition>
    );
  });

  describe('when the SkewTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the SkewTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
