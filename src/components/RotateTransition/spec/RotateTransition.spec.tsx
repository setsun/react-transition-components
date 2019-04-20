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
    wrapper.setProps({ in: true });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the RotateTransition is exiting', () => {
    wrapper.setProps({ in: false });

    it('should apply exiting styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })
})
