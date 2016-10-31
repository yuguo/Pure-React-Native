import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {type, onPress, onLongPress, text, bgColor, disabled} = this.props;

    /* 自定义style */
    let customStyle = {}
    if(bgColor){
      customStyle.backgroundColor = bgColor;
    }

    return(
      <TouchableHighlight
        style={[
          styles.button,
          styles[type] || styles["blue"],
          customStyle,
          disabled && styles.disabled
        ]}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        underlayColor={colors.btBluePressed}
      >
          <Text style={[
              styles.text,
              disabled && styles.disabledText
            ]}>
            {text}
          </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  blue: {
    backgroundColor: colors.btBlue
  },
  red: {
    backgroundColor: colors.btRed
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  disabled: {
    backgroundColor: colors.btDisabled
  },
  disabledText: {
    color: colors.btDisabledText
  }
});