import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Button from '../component/buttons/Button';

export default class ButtonView extends Component {
  render(){
    return(
      <View style={this.props.style}>
        <Button
          onPress={() => {console.log('pressed!')}}
          onLongPress={() => {console.log('onLongPress!')}}
          text='按钮'
        />
      </View>
    )
  }
}

