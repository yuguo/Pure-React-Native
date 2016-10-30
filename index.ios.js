import React, { Component } from 'react';
import { AppRegistry, Text, Navigator, ListView, StyleSheet } from 'react-native';

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
    }else if(route.name == 'QButton'){
      return(
        <ButtonView
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
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5
  },
  title: {
    fontSize:20
  }
});

AppRegistry.registerComponent('QUI', () => QUI);
