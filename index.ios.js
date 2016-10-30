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
    if(route.name == 'Main') {
      return(
        <MainView {...route.passProps} />
      )
    }else if(route.name == 'Button'){
      return
        <ButtonView />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Main',
          passProps: {
            ds: this.state.dataSource
          }
        }}
        renderScene={ this.renderScene }
      />
    );
  }
}


AppRegistry.registerComponent('QUI', () => QUI);
