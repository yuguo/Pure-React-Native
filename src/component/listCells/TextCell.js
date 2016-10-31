import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 20
  },
  description: {
    fontSize: 14,
    color: '#bbb',
    marginLeft: 10,
    marginRight: 20
  },
  cell: {
    // height: 46,
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          this.props.onForward(this.props.title);
        }}>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.props.description ? <Text style={styles.description}>{this.props.description}</Text> : null}
      </TouchableOpacity>
    )
  }
}
