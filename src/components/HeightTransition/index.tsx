import * as React from 'react';
import { useState } from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  height: string | number;
  fade?: boolean;
}

const BaseHeightTransition: React.SFC<Props> = createTransition({
  from: ({ fade }) => ({ height: 0, overflow: 'hidden', opacity: (fade ? 0 : undefined) }),
  enter: ({ height, fade }) => ({ height, opacity: (fade ? 1 : undefined) }),
});

const HeightTransition = ({
  children,
  onEnter,
  onExit,
  timeout,
  ...rest
}: Props) => {
  const [height, setHeight] = useState('auto');

  return (
    <BaseHeightTransition
      timeout={timeout}
      height={height}
      onEnter={(node, isAppearing) => {
        const child = node.children[0];
        const dimensions = child.getBoundingClientRect();

        setHeight(`${dimensions.height}px`);

        onEnter && onEnter(node, isAppearing);
      }}
      onExit={(node) => {
        setHeight('0px');

        onExit && onExit(node);
      }}
      {...rest}
    >
      <div>
        {children}
      </div>
    </BaseHeightTransition>
  )
}

HeightTransition.displayName = 'HeightTransition';

export default HeightTransition;
