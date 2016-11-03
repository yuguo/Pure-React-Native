import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainView from './view/MainView';

export default class Pure extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <MainView />
    )
  }
}

AppRegistry.registerComponent('QUI', () => Pure);
