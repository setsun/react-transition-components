import { TransitionStatus, TransitionProps } from 'react-transition-group/Transition';

export type LazyCSSProperties = (props: any) => React.CSSProperties;

export type TimingObject = {
  enter: number;
  exit: number;
};

export type Timing = number | TimingObject;

export type TweenProp = {
  start: number;
  end: number;
};

export type TransitionConfig = {
  from: LazyCSSProperties | React.CSSProperties;
  enter: LazyCSSProperties | React.CSSProperties;
  exit?: LazyCSSProperties | React.CSSProperties;
  transitionProperty?: string;
};

export type TransitionComponentChildren =
  React.ReactNode | ((style: React.CSSProperties, status: TransitionStatus) => React.ReactNode);

export type TransitionComponentProps = Pick<TransitionProps, Exclude<keyof TransitionProps, 'timeout'>> & {
  children: TransitionComponentChildren;
  duration?: Timing;
  delay?: Timing;
  easing?: string;
}
