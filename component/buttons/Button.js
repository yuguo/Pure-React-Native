import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableHighlight
        activeOpacity={0.85}
        onLongPress={this.props.onLongPress}
        onPress={() => {
          this.props.onPress()
        }}>
          <Text>{this.props.text}</Text>

      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});