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
    wrapper.setProps({ in: true });

    it('should apply entering styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })

  describe('when the ScaleTransition is exiting', () => {
    wrapper.setProps({ in: false });

    it('should apply exiting styles', () => {
      const result = wrapper.find('div').props().style;
      const expected = {};

      expect(result).toEqual(expected);
    });
  })
})
