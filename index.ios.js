import React, { Component } from 'react';
import { AppRegistry, Text, Navigator, ListView, StyleSheet } from 'react-native';

import MainView from './src/view/MainView.js';
import ButtonView from './src/view/ButtonView.js';
import ListsView from './src/view/ListView.js';

export default class QUI extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Button', 'List', 'Tips', 'Text', 'TabNav', 'Search', 'Dialog', 'Menu', 'Actionsheet', 'Share'
      ])
    }
  }

  renderScene(route, navigator){
    this.navigator = navigator;
    if(route.name == 'Main') {
      return(
        <MainView
          style={styles.container}
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
    }else if(route.name == 'Button'){
      return(
        <ButtonView
          style={styles.container}
        />
      )
    }else if(route.name == 'List'){
      return(
        <ListsView
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
                return (<Text style={styles.title}>Awesome QUI</Text>);
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

AppRegistry.registerComponent('QUI', () => QUI);
