import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound,
  Animated
} from 'react-vr';

export default class Four extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ch1Pos: new Animated.Value(0),
      ch2Pos: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    this.state.ch1Pos.setValue(-2);
    this.state.ch2Pos.setValue(-4);
    Animated.parallel([
      Animated.timing(
        this.state.ch1Pos,
        {
          toValue: 4,
          duration: 135000,
        }
      ),
      Animated.timing(
        this.state.ch2Pos,
        {
          toValue: 2,
          duration: 135000,
        }
      )
    ]).start();
  }

  render() {
    return(
      <Animated.View>
        <Animated.View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            layoutOrigin: [0.5, 0.5]
          }}>
          <Animated.View style={{
              position: 'absolute',
              transform:[
                {translateZ: this.state.ch1Pos}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track4_channel1.mov"}} >
                <Sound source={{uri: "https://dryhr7ux6pki1.cloudfront.net/04-HyperInstrumentalism1forNoahCresevsky.mp3"}} loop={true}/>
              </Video>
          </Animated.View>
          <Animated.View style={{
            position: 'absolute',
            transform:[
              {translateZ: this.state.ch2Pos}
            ]
          }}>
          <Video
            style={{
              width: 3.0,
              height:2.0
            }}
            loop={true}
            source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track4_channel2.mov"}} >
          </Video>
        </Animated.View>
        </Animated.View>
      </Animated.View>
    )
  }
};
