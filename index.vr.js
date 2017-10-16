import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
} from 'react-vr';
import One from './components/One';
import Two from './components/Two';

export default class AscensionVR extends React.Component {
  state = {
    currentView: 2
  }

  render() {
    const views = [
      <One/>,
      <Two/>
    ]
    const showView = () => {
      return views[this.state.currentView - 1];
    }
    return (
      <View>
        {/* {<Pano source={asset('chess-world.jpg')}/>} */}
        {showView()}
      </View>
    );
  }
};

AppRegistry.registerComponent('AscensionVR', () => AscensionVR);
