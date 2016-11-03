import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../pure_module/src/config/colors'

import Button from '../pure_module/src/buttons/Button';

const styles = StyleSheet.create({
  alignButtons: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBottom: 10,
  }
});

export default class ButtonView extends Component {
  render(){
    return(
      <View style={this.props.style}>
        <View style={styles.alignButtons}>
          <Button
            type="line"
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
        </View>
        <View style={styles.alignButtons}>
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
          <Button
            disabled
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            bgColor="blue"
            text="自定义按钮"
          />
        </View>

        <View>
          <Button
            type="line"
            size="large"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="按钮"
          />
          <Button
            size="large"
            type="blue"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="确认"
          />
          <Button
            size="large"
            type="red"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="警告"
          />
          <Button
            size="large"
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            disabled={true}
            text="Disabled"
          />
          <Button
            size="large"
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