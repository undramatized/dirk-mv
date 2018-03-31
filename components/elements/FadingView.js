import React from 'react';
import {
  Animated
} from 'react-vr';

class FadingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount = () => {
    this.fadeOut();
  }

  fadeOut = () => {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: this.props.fadeDuration,
      }
    ).start()
  }

  render () {
    return (
      <Animated.View style={{
          opacity: this.state.opacity
        }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default FadingView;
