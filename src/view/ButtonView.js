import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../component/config/colors'

import Button from '../component/buttons/Button';

export default class ButtonView extends Component {
  render(){
    return(
      <View>
        <View style={[this.props.style, {
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexDirection:'row'
          }]}>
          <Button
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="按钮"
          />
          <Button
            type="blue"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="确认"
          />
          <Button
            type="red"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="警告"
          />
          <Button
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            disabled={true}
            text="Disabled"
          />
          <Button
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            bgColor="blue"
            text="自定义按钮"
          />
        </View>

        
      </View>
    )
  }
}