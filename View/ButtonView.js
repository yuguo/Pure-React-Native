import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ButtonView extends Component {
  render(){
    return(
      <View style={this.props.style}>
        <Text>This is ButtonView!</Text>
      </View>
    )
  }
}