import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound
} from 'react-vr';

export default class One extends React.Component {
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
                {rotateY : -64},
                {translate: [1.5, 0, -1.8]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source= {{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track6_channel1.mov"}}/>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, -1]}
              ]
            }}>
            <Video
              muted={true}
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track6_channel3.mp4"}} >
                 <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/06-ModulatedAscension.mp3"}} loop={true}/>
              </Video>
          </View>
          <View style={{
              transform:[
                {rotateY : 64},
                {translate: [-1.5, 0, -1.8]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track6_channel2.mov"}} />
          </View>
        </View>
      </View>
    )
  }
};
