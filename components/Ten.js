import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound
} from 'react-vr';

export default class Ten extends React.Component {
  render() {
    return(
      <View>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5]
          }}>

          <View style={{
              transform:[
                {translate: [0, 0, -2]}
              ]
            }}>
            <Video
              style={{
                width: 15.0,
                height:10.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track10_channel1.mov"}} >
                <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/10-theWheelAscension.mp3"}} loop={true}/>
              </Video>
          </View>
        </View>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5]
          }}>
          <View style={{
              transform:[
                {translate: [0, 10, 2]}
              ]
            }}>
            <Video
              style={{
                width: 1.5,
                height:1.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track10_channel2.mov"}} />
          </View>
        </View>
      </View>
    )
  }
};
