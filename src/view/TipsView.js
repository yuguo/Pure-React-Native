import React, {Component} from 'react';
import {ScrollView, ListView, Text, View, StyleSheet} from 'react-native';
import {Toast} from '../component/tips';

export default class TipsView extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Toast
        backgroundColor="blue"
        onClosed={()=>{console.log('onClosed!')}}
      />
    )
  }
}