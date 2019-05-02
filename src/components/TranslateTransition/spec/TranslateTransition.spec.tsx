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
    beforeEach(() => {
      wrapper.setProps({ in: true });
    });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the TranslateTransition is exiting', () => {
    beforeEach(() => {
      wrapper.setProps({ in: false });
    });

    it('should apply exiting styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })
})
