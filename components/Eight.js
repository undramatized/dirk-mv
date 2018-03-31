import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Video,
  Sound
} from 'react-vr';
import FadingView from './elements/FadingView';

export default class Eight extends React.Component {
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
            <FadingView fadeDuration = {172000}>
              <Video
                style={{
                  width: 3.0,
                  height:2.0
                }}
                loop={true}
                source= {{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track8_channel2.mov"}}/>
            </FadingView>
          </View>
          <View style={{
              transform:[
                {translate: [0, 0, -1.5]}
              ]
            }}>
            <FadingView fadeDuration = {172000}>
              <Video
                style={{
                  width: 3.0,
                  height:2.0
                }}
                loop={true}
                source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track8_channel1.mov"}} >
                <Sound source={{uri: "http://dryhr7ux6pki1.cloudfront.net/08-wedgeArgument.mp3"}} loop={true}/>
              </Video>
            </FadingView>
          </View>
          <View style={{
              transform:[
                {rotateY : 90},
                {translate: [0, 0, -1.8]}
              ]
            }}>
            <FadingView fadeDuration = {172000}>
              <Video
                style={{
                  width: 3.0,
                  height:2.0
                }}
                loop={true}
                source={{uri: "http://d2e2gcldkx3p3k.cloudfront.net/track8_channel2.mov"}} />
            </FadingView>
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
            <FadingView fadeDuration = {172000}>
              <Video
                style={{
                  width: 3.0,
                  height:2.0
                }}
                loop={true}
                source={{uri: "https://d2e2gcldkx3p3k.cloudfront.net/track8_layered.mp4"}} />
            </FadingView>
          </View>
        </View>
      </View>
    )
  }
};
