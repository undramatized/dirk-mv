import React from 'react';
import {
  Animated
} from 'react-vr';

const speedValues = {
  1: {in: 4500, out: 2500},
  2: {in: 3500, out: 2000},
  3: {in: 2500, out: 1500},
  4: {in: 1500, out: 1000},
}

class BreathingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    this.breathIn();
  }

  breathIn = () => {
    Animated.timing(
      this.state.position,
      {
        toValue: -0.5,
        duration: speedValues[this.props.speed].in,
      }
    ).start(this.breathOut)
  }

  breathOut = () => {
    Animated.timing(
      this.state.position,
      {
        toValue: 0,
        duration: speedValues[this.props.speed].out,
      }
    ).start(this.breathIn)
  }

  render () {
    return (
      <Animated.View style={{
          transform:[
            {translateZ : this.state.position}
          ]
        }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

BreathingView.defaultProps = {speed: 1}

export default BreathingView;
