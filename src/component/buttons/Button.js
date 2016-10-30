import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {onPress, onLongPress, text, backgroundColor, disabled} = this.props;
    return(
      <TouchableOpacity
        style={[styles.button, {backgroundColor: backgroundColor}]}
        activeOpacity={0.85}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={() => {
          onPress()
        }}>
          <Text style={styles.text}>{text}</Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.primary1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});