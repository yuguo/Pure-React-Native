import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Color from 'color';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent'
    // flexDirection: 'row'
  },
  text: {
    color: 'white'
  },
  disabled: {
    backgroundColor: colors.btDisabled
  },
  disabledText: {
    color: colors.btDisabledText
  }
});

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {type, onPress, onLongPress, text, bgColor, disabled, size} = this.props;

    /* 自定义背景色，或读取type */
    let backgroundColor,
        borderStyle,
        borderTextStyle;
    if(bgColor){
      backgroundColor = bgColor;
    }else{
      switch (type) {
        case 'red':
          backgroundColor = colors.btRed;
          break;
        case 'blue':
          backgroundColor = colors.btBlue;
          break;
        case 'line':
          backgroundColor = 'white';
          borderStyle = {
            borderColor: colors.btWhiteLine
          };
          borderTextStyle = {
            color: 'black',
          }
          break;
        default:
          backgroundColor = colors.btRed;
      }
    }

    let underlayColor = Color(backgroundColor).darken(0.1).hexString();

    /* 读取size */
    switch(size){
      case 'large':
        sizeStyle = {
          borderRadius: 3,
          padding: 11,
          marginLeft: 12,
          marginRight: 12,
          marginTop: 5,
          marginBottom: 5
        },
        sizeTextStyle = {
          fontSize: 18
        }
        break;
      default:
        sizeStyle = {
          borderRadius: 2,
          height: 30,
          minWidth: 30,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: 12,
          marginRight: 12,
        },
        sizeTextStyle = {
          fontSize: 14
        }
    }

    return(
      <TouchableHighlight
        style={[
          styles.button,
          {backgroundColor: backgroundColor},
          borderStyle,
          sizeStyle,
          disabled && styles.disabled
        ]}
        activeOpacity={1}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        underlayColor={underlayColor}
      >
          <Text style={[
              styles.text,
              borderTextStyle,
              sizeTextStyle,
              disabled && styles.disabledText
            ]}
          >
            {text}
          </Text>
      </TouchableHighlight>
    )
  }
}
