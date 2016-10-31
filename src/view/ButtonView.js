import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../component/config/colors'

import Button from '../component/buttons/Button';

export default class ButtonView extends Component {
  render(){
    return(
      <View style={this.props.style}>
        <Text>普通按钮</Text>
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          text="确认"
        />
        <Text>蓝色按钮</Text>
        <Button
          type="blue"
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          text="确认"
        />
        <Text>红色按钮</Text>
        <Button
          type="red"
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          text="警告"
        />
        <Text>Disable按钮</Text>
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          disabled={true}
          text="Disabled"
        />
        <Text>自定义按钮</Text>
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          bgColor="blue"
          text="自定义按钮"
        />
        <Text>自定义按钮Disabled（统一灰色）</Text>
        <Button
          onPress={() => {alert('onPress!')}}
          onLongPress={() => {alert('onLongPress!')}}
          disabled={true}
          text="Disabled"
        />
      </View>
    )
  }
}