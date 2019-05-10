import * as React from 'react';
import { mount } from 'enzyme';

import createTransition from '../';

describe('createTransition', () => {
  describe('when the child element is passed in', () => {
    const TestTransition = createTransition({
      from: { opacity: 0 },
      enter: { opacity: 1 },
    });

    describe('and it is a react child node', () => {
      const wrapper = mount(
        <TestTransition timeout={300}>
          <div></div>
        </TestTransition>
      );

      it('should apply the styles to the node', () => {
        const result = wrapper.find('div').props().style;
        const expected = { opacity: 1, transition: 'all 300ms ease-in-out 0ms' };

        expect(result).toEqual(expected);
      });
    });

    describe('and it is a react child function', () => {
      const mockChild = jest.fn();

      mount(
        <TestTransition timeout={300}>
          {mockChild}
        </TestTransition>
      );

      it('should pass the style and status to the function', () => {
        expect(mockChild).toBeCalledWith(
          { opacity: 1, transition: 'all 300ms ease-in-out 0ms' },
          'entering'
        );
      });
    });
  });
});
