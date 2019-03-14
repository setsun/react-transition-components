import { TransitionStatus, TransitionProps, TransitionChildren } from 'react-transition-group/Transition';

export type TransitionStyles = {
  [key in TransitionStatus]?: React.CSSProperties
}

export type LazyTransitionStyles = (props: Object) => TransitionStyles;

export type LazyCSSProperties = (props: Object) => React.CSSProperties;

export type AugmentedTransitionChildren =
  TransitionChildren | ((status: TransitionStatus, style: React.CSSProperties) => React.ReactNode);

export type TransitionComponentProps = TransitionProps & {
  children: AugmentedTransitionChildren,
  easing?: string,
}

export enum directions {
  left = 'left',
  right = 'right',
  top ='top',
  bottom = 'bottom',
};
