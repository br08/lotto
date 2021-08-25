import './LotteryBall.css';
import React, { Component } from 'react';

class LotteryBall extends Component {
  static defaultProps = {
    num: 1
  }

  render() {
    return(
      <div className="ball">{this.props.num}</div>
    );
  }
}

export default LotteryBall;