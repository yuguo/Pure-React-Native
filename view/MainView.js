import React, {Component} from 'react';
import {Navigator, TouchableOpacity, View, StyleSheet, Text} from 'react-native';

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

  _renderLeftButton(route, navigator){
    if(route.name == 'Main'){
      return null;
    }else{
      return (
        <TouchableOpacity style={styles.navBarButton} onPress={() => navigator.pop()}>
          <Text style={styles.navBarButtonText}>Back</Text>
        </TouchableOpacity>
      );
    }
  }

  _renderTitle(route){
    if(route.name == 'Main'){
      return null;
    }else{
      return (
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleText}>
            {route.name}
          </Text>
        </View>
      );
    }
  }

  render(){
    return(
      <Navigator
        initialRoute={{ name: 'Main' }}
        renderScene={ this._renderScene.bind(this) }
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBarContainer}
            routeMapper={{
              LeftButton: this._renderLeftButton,
              RightButton: () => null,
              Title: this._renderTitle,
             }
           }
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  navBarContainer: {
    backgroundColor: 'white',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  navBarButton: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    lineHeight: 44,
    fontSize: 17,
    letterSpacing: 0.5,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 17,
    lineHeight: 44,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
  }
});
