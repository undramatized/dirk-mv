import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
} from 'react-vr';

export default class AscensionVR extends React.Component {
  render() {
    return (
      <View>
        {/*<Pano source={asset('chess-world.jpg')}/>*/}
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
              source={{uri: '../static_assets/track1(channel2).mp4'}} />
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
              source={{uri: '../static_assets/track1(channel1).mp4'}} />
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
              source={{uri: '../static_assets/track1(channel2).mp4'}} />
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
                {translate: [0, 2, 2]}
              ]
            }}>
            <Video
              style={{
                width: 3.0,
                height:2.0
              }}
              loop={true}
              source={{uri: '../static_assets/track1(channel1).mp4'}} />
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('AscensionVR', () => AscensionVR);
