import { TransitionStatus, TransitionProps, TransitionChildren } from 'react-transition-group/Transition';

export type AugmentedTransitionChildren = TransitionChildren | ((status: TransitionStatus, style: Object) => React.ReactNode)

export type TransitionStyles = {
  [key in TransitionStatus]?: Object
}

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
