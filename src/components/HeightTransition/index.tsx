import * as React from 'react';
import { useState, useLayoutEffect, useRef } from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  height: string | number;
  fade?: boolean;
}

const BaseHeightTransition: React.SFC<Props> = createTransition({
  from: ({ fade }) => ({ height: 0, opacity: (fade && 0) }),
  enter: ({ height, fade }) => ({ height, opacity: (fade && 1) }),
});

const getHeight = (node: HTMLElement) => {
  const child = node && node.children[0];
  return child ? child.getBoundingClientRect().height : 0;
}

const HeightTransition = ({
  children,
  onEnter,
  onExit,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>();
  const [height, setHeight] = useState('auto');
  const [open, setOpen] = useState(true);

  // intercept the in prop, so we can delay toggling the
  // open state of the height transition until we have
  // recalculated the height it needs to transition to
  useLayoutEffect(() => {
    if (!rest.in && open) {
      setHeight(`${getHeight(ref.current)}px`);
      setOpen(false);
    } else if (rest.in && !open) {
      setHeight(`${getHeight(ref.current)}px`);
      setOpen(true);
    }
  });

  return (
    <BaseHeightTransition
      {...rest}
      in={open}
      height={height}
      onEnter={(node, isAppearing) => {
        setHeight(`${getHeight(node)}px`);
        onEnter && onEnter(node, isAppearing);
      }}
      onEntered={() => setHeight('auto')}
      onExit={(node) => {
        setHeight('0px');
        onExit && onExit(node);
      }}
    >
      <div ref={ref} style={{ overflow: (height !== 'auto' ?  'hidden' : '') }}>
        {children}
      </div>
    </BaseHeightTransition>
  )
}

HeightTransition.displayName = 'HeightTransition';

export default HeightTransition;
