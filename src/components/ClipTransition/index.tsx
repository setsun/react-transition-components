import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

export enum presets {
  circle = 'circle',
  ellipse = 'ellipse',
  inset = 'inset',
  polygon = 'polygon',
  path = 'path',
}

type Props = TransitionComponentProps & {
  preset?: presets;
};

const presetConfigs = {
  [presets.circle]: {
    from: ({ }) => ({ clipPath: `circle(0% at 50% 50%)` }),
    enter: ({ }) => ({ clipPath: `circle(100% at 50% 50%)` }),
  },
  [presets.ellipse]: {
    from: ({ }) => ({ clipPath: `ellipse(0% 0% at 50% 50%)` }),
    enter: ({ }) => ({ clipPath: `ellipse(100% 100% at 50% 50%)` }),
  },
  [presets.inset]: {
    from: ({ }) => ({ clipPath: `inset(100% 100% 0% 0%)` }),
    enter: ({ }) => ({ clipPath: `inset(0% 0% 0% 0%)` }),
  },
  [presets.polygon]: {
    from: ({ polygon }) => ({ clipPath: `polygon(${polygon.start})` }),
    enter: ({ polygon }) => ({ clipPath: `polygon(${polygon.end})` }),
  },
  [presets.path]: {
    from: ({ path }) => ({ clipPath: `path(${path.start})` }),
    enter: ({ path }) => ({ clipPath: `path(${path.end})` }),
  },
}

const ClipTransition: React.SFC<Props> = createTransition({
  from: (props) => presetConfigs[props.preset].from(props),
  enter: (props) => presetConfigs[props.preset].enter(props),
});

ClipTransition.defaultProps = {
  ...ClipTransition.defaultProps,
  preset: presets.ellipse,
  path: {},
  polygon: {},
};

ClipTransition.displayName = 'ClipTransition';

export default ClipTransition;
