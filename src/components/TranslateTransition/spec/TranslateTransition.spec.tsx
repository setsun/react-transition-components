import * as React from 'react';
import { shallow } from 'enzyme';

import TranslateTransition from '..';

describe('TranslateTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TranslateTransition timeout={300}>
        <div />
      </TranslateTransition>
    );
  });

  describe('when the TranslateTransition is entering', () => {
    it('should apply entering styles', () => {

    });
  })

  describe('when the TranslateTransition is exiting', () => {
    it('should apply exiting styles', () => {

    });
  })
})
