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
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Eight from './components/Eight';

export default class AscensionVR extends React.Component {
  state = {
    currentView: 6
  }

  render() {
    const views = [
      <One/>,
      <Two/>,
      <Four/>,
      <Five/>,
      <Six/>,
      <Eight/>
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
