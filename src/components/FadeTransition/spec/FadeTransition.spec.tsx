import * as React from 'react';
import { shallow } from 'enzyme';

import FadeTransition from '../';

describe('FadeTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FadeTransition timeout={300}>
        <div />
      </FadeTransition>
    );
  });

  describe('when the FadeTransition is entering', () => {
    beforeEach(() => {
      wrapper.setProps({ in: true });
    });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the FadeTransition is exiting', () => {
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
