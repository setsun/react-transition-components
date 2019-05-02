import * as React from 'react';
import { shallow } from 'enzyme';

import HeightTransition from '..';

describe('HeightTransition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <HeightTransition timeout={300}>
        <div />
      </HeightTransition>
    );
  });

  describe('when the HeightTransition is entering', () => {
    beforeEach(() => {
      wrapper.setProps({ in: true });
    });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the HeightTransition is exiting', () => {
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
