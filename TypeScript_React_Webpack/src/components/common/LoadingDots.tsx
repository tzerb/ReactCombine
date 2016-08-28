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

// TODO TZ
  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.setState({  // eslint-disable-line react/no-did-mount-set-state
  //       frame: this.state.frame + 1
  //     });
  //   }, this.props.interval);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (<span>working...</span>);
    // let dots = this.state.frame % (this.props.dots + 1);
    // let text = '';
    // while (dots > 0) {
    //   text += '.';
    //   dots--;
    // }
    // return <span {...this.props}>{text}&nbsp;</span>;
  }
}

// LoadingDots.defaultProps = {
//   interval: 300, dots: 3
// };

// LoadingDots.propTypes = {
//   interval: PropTypes.number,
//   dots: PropTypes.number
// };

export default LoadingDots;
