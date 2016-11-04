import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import colors from '../pure_module/src/config/colors';
import {Button} from '../pure_module/src/';

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
      <ScrollView style={this.props.style}>
        <View style={styles.alignButtons}>
          <Button
            onPress={() => {alert('onPress!')}}
            text="按钮"
          />
          <Button
            style={{backgroundColor: colors.btBlue, borderColor: "transparent"}}
            textStyle={{color: "white"}}
            onPress={() => {alert('onPress!')}}
            text="确认"
          />
          <Button
            style={{backgroundColor: colors.btRed, borderColor: "transparent"}}
            textStyle={{color: "white"}}
            onPress={() => {alert('onPress!')}}
            text="警告"
          />
        </View>
        <View style={styles.alignButtons}>
          <Button
            onPress={() => {alert('onPress!')}}
            disabled
            text="Disabled"
          />
          <Button
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="多文字按钮"
          />
        </View>

        <View>
          <Button
            large
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            text="A Really Large Button"
          />
        <View style={{flexDirection: 'row'}} >
            <Button
              large
              style={{flex: 1, backgroundColor: colors.btBlue, borderColor: "transparent"}}
              textStyle={{color: "white"}}
              onPress={() => {alert('onPress!')}}
              onLongPress={() => {alert('onLongPress!')}}
              text="确认"
            />
            <Button
              large
              style={{flex: 1, backgroundColor: colors.btRed, borderColor: "transparent"}}
              textStyle={{color: "white"}}
              onPress={() => {alert('onPress!')}}
              onLongPress={() => {alert('onLongPress!')}}
              text="警告"
            />
          </View>
          <Button
            large
            onPress={() => {alert('onPress!')}}
            onLongPress={() => {alert('onLongPress!')}}
            disabled={true}
            text="Disabled"
          />
        </View>
      </ScrollView>
    )
  }
}