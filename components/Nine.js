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
                {rotateY : -90},
                {translate: [0, 0, -1.8]}
              ]
            }}>
            {/* Left Video */}
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source= {{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track9_channel2.mov"}}/>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, -1.5]}
              ]
            }}>
            {/* Front Video */}
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track9_channel2.mov"}} >
                <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/09-HyperInstrumentalismAscensionForAndreaLaRose.mp3"}} loop={true}/>
              </Video>
          </View>
          <View style={{
              transform:[
                {rotateY : 90},
                {translate: [0, 0, -1.8]}
              ]
            }}>
            {/* Right Video */}
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track9_channel2.mov"}} />
          </View>
        </View>
        <View style={{
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform:[
              {translate: [0, 2, 1.5]}
            ]
          }}>
          <View style={{
            transform: [
              {rotateY: 90},
              {rotateX: -90},
              {translate: [1.5, 0, -2.5]}
            ]
          }}>
           {/* Top Video */}
            <Video
              style={{
                width: 3.0,
                height:2.5
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track9_channel2.mov"}} />
          </View>
          <View style={{
            transform: [
              {translate: [0, -1.25, 0]}
            ]
          }}>
            {/* Back Video */}
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track9_channel2.mov"}} />
          </View>
          <View style={{
            transform: [
              {rotateY: 90},
              {rotateX: 90},
              {translate: [1.5, 0, -1]}
            ]
          }}>
            {/* Bottom Video */}
            <Video
              style={{
                width: 6.0,
                height:5.0
              }}
              loop={true}
              source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track9_layered.mp4"}} />
          </View>
        </View>
      </View>
    )
  }
};
