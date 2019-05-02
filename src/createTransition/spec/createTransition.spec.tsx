import * as React from 'react';
import { shallow } from 'enzyme';

import createTransition from '../';

const createTestTransition = (
  transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  },
  defaultStyle = {
    color: 'black',
  }
) => createTransition(transitionStyles, defaultStyle);

describe('createTransition', () => {
  describe('when the child element is passed in', () => {
    const TestTransition = createTestTransition();

    describe('and it is a react child node', () => {
      const wrapper = shallow(
        <TestTransition timeout={300}>
          <div></div>
        </TestTransition>
      );

      it('should apply the styles to the node', () => {
        const result = wrapper.find('div').props().style;
        const expected = {};

        expect(result).toEqual(expected);
      });
    });

    describe('and it is a react child function', () => {
      const mockChild = jest.fn();

      shallow(
        <TestTransition timeout={300}>
          {mockChild}
        </TestTransition>
      );

      it('should pass the status and style to the function', () => {
        expect(mockChild).toBeCalledWith('', '');
      });
    });
  });

  describe('when a transitionStyle is passed in', () => {
    const mockLazyTransitionStyle = jest.fn();
    const TestTransition = createTestTransition(mockLazyTransitionStyle);

    describe('and it is lazy', () => {
      beforeEach(() => {
        shallow(<TestTransition />);
      })

      it('should be passed the component props on render', () => {
        const expected = {};
        expect(mockLazyTransitionStyle).toBeCalledWith(expected);
      });

      it('should return a transitionStyle object', () => {
        const expected = {};
        expect(mockLazyTransitionStyle).toReturnWith(expected);
      });
    })
  });

  describe('when a defaultStyle is passed in', () => {
    const mockLazyDefaultStyle = jest.fn();
    const TestTransition = createTestTransition(jest.fn(), mockLazyDefaultStyle);

    describe('and it is lazy', () => {
      beforeEach(() => {
        shallow(<TestTransition />);
      })

      it('should be passed the component props on render', () => {
        const expected = {};
        expect(mockLazyDefaultStyle).toBeCalledWith(expected);
      });

      it('should return a defaultStyle object', () => {
        const expected = {};
        expect(mockLazyDefaultStyle).toBeCalledWith(expected);
      });
    })
  });
});
