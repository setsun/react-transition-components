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
    wrapper.setProps({ in: true });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the SkewTransition is exiting', () => {
    wrapper.setProps({ in: false });

    it('should apply exiting styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })
})
