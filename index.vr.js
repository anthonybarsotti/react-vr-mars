import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
} from 'react-vr';

class Mars extends React.Component {
  render() {
    return (
      <Pano source={asset('mars-sky.jpg')}/>
    );
  }
};

AppRegistry.registerComponent('Mars', () => Mars);
