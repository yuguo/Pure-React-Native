import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';
import TextUnit from './TextUnit';

const styles = StyleSheet.create({
  cell: {
    paddingTop: 14,
    paddingBottom: 14,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightwards: {
    height: 16,
    width: 16,
    marginRight: 10,
    tintColor: colors.btDisabledText
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {title, showArrow, onForward} = this.props;
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          onForward(title);
        }}>
        <TextUnit {...this.props}/>
        {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
      </TouchableOpacity>
    )
  }
}
