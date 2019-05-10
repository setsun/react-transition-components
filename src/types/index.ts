import { TransitionStatus, TransitionProps, TransitionChildren } from 'react-transition-group/Transition';

export type LazyCSSProperties = (props: any) => React.CSSProperties;

export type AugmentedTransitionChildrenFunction = ((style: React.CSSProperties, status: TransitionStatus) => React.ReactNode);

export type AugmentedTransitionChildren = TransitionChildren | AugmentedTransitionChildrenFunction;

export type TimingObject = { enter?: number, exit?: number };

export type Timing = number | TimingObject;

export type TransitionComponentProps = Pick<TransitionProps, Exclude<keyof TransitionProps, 'timeout'>> & {
  children: AugmentedTransitionChildren;
  duration?: Timing;
  delay?: Timing;
  easing?: string;
}
