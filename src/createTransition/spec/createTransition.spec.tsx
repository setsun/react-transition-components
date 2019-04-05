import * as React from 'react';
import { shallow } from 'enzyme';

import createTransition from '../';

const createTestTransition = () => {
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const defaultStyle = {
    color: 'black',
  };

  return createTransition(transitionStyles, defaultStyle);
};

describe('createTransition', () => {
  describe('when the child element is passed in', () => {
    const TestTransition = createTestTransition();

    describe('and it is a react child node', () => {
      const wrapper = shallow(
        <TestTransition timeout={300}>
          <div data-test-id="test-node"></div>
        </TestTransition>
      );

      it('should apply the styles to the node', () => {
        const testNode = wrapper.find('data-test-id="test-node"');
        expect(testNode.props().style).toEqual({});
      });
    });

    describe('and it is a react child function', () => {
      const mockChild = jest.fn();
      const wrapper = shallow(
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
    describe('and it is lazy', () => {
      it('should be passed the component props on render', () => {

      });

      it('should return a transitionStyle object', () => {

      });
    })
  });

  describe('when a defaultStyle is passed in', () => {
    describe('and it is lazy', () => {
      it('should be passed the component props on render', () => {

      });

      it('should return a defaultStyle object', () => {

      });
    })
  });
});
