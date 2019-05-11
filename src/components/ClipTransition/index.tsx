import createTransition from '../../createTransition';
import { TransitionComponentProps, TweenProp } from '../../types';

export enum shapes {
  circle = 'circle',
  ellipse = 'ellipse',
  inset = 'inset',
  polygon = 'polygon',
}

type Props = TransitionComponentProps & {
  shape?: shapes;
  circle?: TweenProp;
  ellipse?: TweenProp;
  inset?: TweenProp;
  polygon?: TweenProp;
};

const shapesConfig = {
  [shapes.circle]: {
    from: ({ circle }) => ({ clipPath: `circle(${circle.start})` }),
    enter: ({ circle }) => ({ clipPath: `circle(${circle.end})` }),
  },
  [shapes.ellipse]: {
    from: ({ ellipse }) => ({ clipPath: `ellipse(${ellipse.start})` }),
    enter: ({ ellipse }) => ({ clipPath: `ellipse(${ellipse.end})` }),
  },
  [shapes.inset]: {
    from: ({ inset }) => ({ clipPath: `inset(${inset.start})` }),
    enter: ({ inset }) => ({ clipPath: `inset(${inset.end})` }),
  },
  [shapes.polygon]: {
    from: ({ polygon }) => ({ clipPath: `polygon(${polygon.start})` }),
    enter: ({ polygon }) => ({ clipPath: `polygon(${polygon.end})` }),
  },
}

const ClipTransition: React.SFC<Props> = createTransition({
  from: (props) => shapesConfig[props.shape].from(props),
  enter: (props) => shapesConfig[props.shape].enter(props),
});

ClipTransition.defaultProps = {
  ...ClipTransition.defaultProps,
  shape: shapes.circle,
  circle: { start: '0% at 50% 50%', end: '100% at 50% 50%' },
  ellipse: { start: '0% 0% at 50% 50%', end: '100% 100% at 50% 50%' },
  inset: { start: '100% 100% 0% 0%', end: '0% 0% 0% 0%' },
  polygon: { start: '', end: '' },
};

ClipTransition.displayName = 'ClipTransition';

export default ClipTransition;
