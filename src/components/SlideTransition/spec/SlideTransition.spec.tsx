import * as React from 'react';
import { shallow } from 'enzyme';

import SlideTransition from '../';

describe('SlideTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SlideTransition timeout={300}>
        <div />
      </SlideTransition>
    );
  });

  describe('when the SlideTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the SlideTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
