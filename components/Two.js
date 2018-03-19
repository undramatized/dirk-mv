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
    const multiplyVideo = (count, url) => {
      let vid = [];
      for (let i=0; i<count; i++){
        vid.push(
          <Video
            style={{
              width: 30.0,
              height: 20.0
            }}
            loop={true}
            source= {{uri: url}}/>
        )
      }
      return vid;
    }
    return(
      <View>
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            layoutOrigin: [0.5, 0.5],
            transform:[
              {rotateY : -90}
            ]
          }}>
            <View style={{
                transform:[
                  {rotateX : -90},
                  {translate: [15, 0, 5]}
                ]
              }}>
              {multiplyVideo(2, "http://d2e2gcldkx3p3k.cloudfront.net/track2_channel1_tiled.mp4")}
            </View>
            <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/02-grainStudy2theBrook.mp3"}} loop={true}/>
            <View style={{
                transform:[
                  {rotateX : 90},
                  {translate: [-15, 0, 10]}
                ]
              }}>
              {multiplyVideo(2, "http://d2e2gcldkx3p3k.cloudfront.net/track2_channel2_tiled.mp4")}
            </View>
          </View>
      </View>
    )
  }
}
