import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 30,
    marginLeft: 10
  },
  cell: {
    height: 46,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});

export default class SimpleCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          this.props.onForward(this.props.children);
        }}>
        <View style={{width: 34, height: 34, margin: 6, backgroundColor: 'powderblue'}} />
        <Text style={styles.listTitle}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
