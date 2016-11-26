import * as React from 'react';
import {PropTypes} from 'react';

export interface  LoadingDotsProps {
  interval:number;
  dots:number;
}
export interface  LoadingDotsState {}

class LoadingDots extends React.Component<LoadingDotsProps, LoadingDotsState> {
  constructor(props : LoadingDotsProps, context : any) { // TODO TZ is any LoadingDotsState?
    super(props, context);

    this.state = {frame: 1};
  }

  render() {
    return (<span>working...</span>);
  }
}

export default LoadingDots;
