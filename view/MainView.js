import React, {Component} from 'react';
import {Navigator, ScrollView, ListView, Image, View, StyleSheet, Text} from 'react-native';

import MainListView from './MainListView.js';
import ButtonView from './ButtonView.js';
import CellView from './CellView.js';
import TipsView from './TipsView.js';

export default class MainView extends Component {


  _renderScene(route, navigator){
    this.navigator = navigator;
    if(route.name == 'Main') {
      return(
        <MainListView
          style={styles.container}
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

  render(){
    return(
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={ this._renderScene.bind(this) }
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
                return null;
              }else{
                return  (<Text style={styles.title}>{route.name}</Text>);
              }},
           }}
           style={{ height: 50}}
          />
        }
      />
    )
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
