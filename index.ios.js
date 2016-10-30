import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  ListView
} from 'react-native';

import MainView from './View/MainView.js';
import ButtonView from './View/ButtonView.js';

export default class QUI extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'QButton', 'QModal'
      ])
    }
  }

  renderScene(route, navigator){
    this.navigator = navigator;
    if(route.name == 'Main') {
      return(
        <MainView
          ds={this.state.dataSource}
          onForward={ (name) => {
            navigator.push({
              name: name
            })
          }}
          onBack={ () => {
            console.log(route.name);
          }}
        />
      )
    }else if(route.name == 'QButton'){
      return(
        <ButtonView />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Main'
        }}
        renderScene={ this.renderScene.bind(this) }
      />
    );
  }
}

AppRegistry.registerComponent('QUI', () => QUI);
