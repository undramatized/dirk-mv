import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound
} from 'react-vr';

export default class Five extends React.Component {
  render() {
    return(
      <View>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform:[
              {translateZ: -0.5}
            ]
          }}>
          <View style={{
              transform:[
                {rotateY : 60},
                {translate: [1 , 0, 0.3]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source= {{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel2.mov"}}/>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, -2]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel1.mov"}} >
                <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/05-grainStudy1briefRain.mp3"}} loop={true}/>
              </Video>
          </View>
          <View style={{
              transform:[
                {rotateY : -60},
                {translate: [-1, 0, 0.3]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel2.mov"}} />
          </View>
        </View>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform:[
              {translateZ: 0.6},
              {translateY: 2}
            ]
          }}>
          <View style={{
              transform:[
                {rotateY : -60},
                {translate: [1 , 0, -0.3]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source= {{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel1.mov"}}/>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, 2]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel2.mov"}} />
          </View>
          <View style={{
              transform:[
                {rotateY : 60},
                {translate: [-1, 0, -0.3]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track5_channel1.mov"}} />
          </View>
        </View>
      </View>
    )
  }
};
