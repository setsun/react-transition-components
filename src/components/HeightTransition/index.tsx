import * as React from 'react';
import { useState } from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  height: string,
}

const transitionStyles = ({ height }) => ({
  entering: { height: 0 },
  entered: { height },
  exiting: { height: 0 },
  exited: { height: 0 },
});

const defaultStyle = ({ height }) => ({
  overflow: height !== 'auto' ? 'hidden' : null,
});

const transitionProperty = 'height';

const BaseHeightTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

const HeightTransition = ({
  children,
  onEnter,
  onEntered,
  onExit,
  ...rest
}: TransitionComponentProps) => {
  const [height, setHeight] = useState('auto');

  return (
    <BaseHeightTransition
      mountOnEnter={false}
      unmountOnExit={false}
      height={height}
      onEnter={(node, isAppearing) => {
        const dimensions = node.getBoundingClientRect();

        console.log(dimensions);

        setHeight(`${dimensions.height}px`);
        onEnter && onEnter(node, isAppearing);
      }}
      onEntered={(node, isAppearing) => {
        // setHeight('auto');
        onEntered && onEntered(node, isAppearing);
      }}
      {...rest}
    >
      {children}
    </BaseHeightTransition>
  )
}

HeightTransition.displayName = 'HeightTransition';

export default HeightTransition;
