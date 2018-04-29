import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound
} from 'react-vr';

export default class Eleven extends React.Component {
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
                {rotateY : -90},
                {translate: [0, 0, -1.8]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source= {{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track11_channel2.mov"}}/>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, -1.5]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track11_channel1.mov"}} >
                <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/11-worldAfterPeace.mp3"}} loop={true}/>
              </Video>
          </View>
          <View style={{
              transform:[
                {rotateY : 90},
                {translate: [0, 0, -1.8]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track11_channel2.mov"}} />
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
                {translate: [0, 2, 1.5]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track11_layered.mp4"}} />
          </View>
        </View>
      </View>
    )
  }
};
