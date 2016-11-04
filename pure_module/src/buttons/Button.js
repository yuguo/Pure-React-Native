import React, {Component} from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import Color from 'color';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: 'transparent',
    borderRadius: 2,
    height: 30,
    minWidth: 30,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#c3c8cc'
    // flexDirection: 'row'
  },
  largeStyle : {
    borderRadius: 3,
    padding: 11,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    marginBottom: 5
  },
  largeTextStyle : {
    fontSize: 18
  },
  text: {
    color: 'black',
    fontSize: 14
  },
  disabled: {
    backgroundColor: "#e9ebec"
  },
  disabledText: {
    color: "#bbbbbb"
  }
});

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {onPress, onLongPress, disabled, large, text, style, textStyle} = this.props;

    /* 自定义背景色，或读取type */
    let underlayColor = (style && style.backgroundColor) ? Color(style.backgroundColor).darken(0.1).hexString() : '#f0f0f0';

    return(
      <TouchableHighlight
        style={[
          styles.button,
          style ? style : null,
          large ? styles.largeStyle : null,
          disabled ? styles.disabled : null
        ]}
        activeOpacity={1}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        underlayColor={underlayColor}
      >
          <Text style={[
              styles.text,
              textStyle ? textStyle : null,
              large ? styles.largeTextStyle : null,
              disabled ? styles.disabledText : null,
            ]}
          >
            {text}
          </Text>
      </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  onPress: React.PropTypes.func,
  onLongPress: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  large: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
  textStyle: React.PropTypes.object
}