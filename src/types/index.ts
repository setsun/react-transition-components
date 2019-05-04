import { TransitionStatus, TransitionProps, TransitionChildren } from 'react-transition-group/Transition';

export type TransitionStyles = {
  [key in TransitionStatus]?: React.CSSProperties
}

export type LazyTransitionStyles = (props: Object) => TransitionStyles;

export type LazyCSSProperties = (props: Object) => React.CSSProperties;

export type AugmentedTransitionChildrenFunction = ((status: TransitionStatus, style: React.CSSProperties) => React.ReactNode);

export type AugmentedTransitionChildren = TransitionChildren | AugmentedTransitionChildrenFunction;

export type TimingObject = { enter?: number, exit?: number };

export type Timing = number | TimingObject;

export type TransitionComponentProps = Pick<TransitionProps, Exclude<keyof TransitionProps, 'timeout'>> & {
  children: AugmentedTransitionChildren;
  duration?: Timing;
  delay?: Timing;
  easing?: string;
}
