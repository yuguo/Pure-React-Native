import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../component/config/colors'

import Button from '../component/buttons/Button';

export default class ButtonView extends Component {
  render(){
    return(
      <View style={this.props.style}>
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          backgroundColor={colors.primary1}
          text="确认"
        />
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          backgroundColor={colors.grey0}
          text="取消"
        />
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          backgroundColor={colors.disabled}
          disabled={true}
          text="Disabled"
        />
      </View>
    )
  }
}