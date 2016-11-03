import React, { Component } from 'react';
import { AppRegistry, Text, Navigator, ListView, StyleSheet } from 'react-native';

import MainView from './src/view/MainView.js';
import ButtonView from './src/view/ButtonView.js';
import CellView from './src/view/CellView.js';
import TipsView from './src/view/TipsView.js';

export default class Pure extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([
        'Button', 'Cell', 'Tips', 'TabNav', 'Search', 'Dialog', 'Menu', 'Actionsheet', 'Share'
      ]);
  }

  renderScene(route, navigator){
    this.navigator = navigator;
    if(route.name == 'Main') {
      return(
        <MainView
          style={styles.container}
          ds={this.dataSource}
          onForward={ (name) => {
            navigator.push({
              name: name
            })
          }}
        />
      )
    }else if(route.name == 'Button'){
      return(
        <ButtonView
          style={styles.container}
        />
      )
    }else if(route.name == 'Cell'){
      return(
        <CellView
          style={styles.container}
        />
      )
    }else if(route.name == 'Tips'){
      return(
        <TipsView
          style={styles.container}
        />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene.bind(this) }
        navigationBar={
          <Navigator.NavigationBar
           routeMapper={{
             LeftButton: (route, navigator, index, navState) => {
              if(route.name == 'Main'){
                return null;
              }else{
                return (<Text onPress={() => navigator.pop() }>Back</Text>);
              }},
            RightButton: (route, navigator, index, navState) => {
              return null;
            },
            Title: (route, navigator, index, navState) =>{
              if(route.name == 'Main'){
                return (<Text style={styles.title}>Pure React Native Components</Text>);
              }else{
                return  (<Text style={styles.title}>{route.name}</Text>);
              }},
           }}
           style={{ height: 50}}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  title: {
    fontSize:20
  }
});

AppRegistry.registerComponent('QUI', () => Pure);
