import React from 'react';
import {
  Animated
} from 'react-vr';

export default class BreathingView extends React.Component {
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
        duration: 4500,
      }
    ).start(this.breathOut)
  }

  breathOut = () => {
    Animated.timing(
      this.state.position,
      {
        toValue: 0,
        duration: 2500,
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
