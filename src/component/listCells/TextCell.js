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
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textCell: {
    // justifyContent: 'flex-start'
  },
  rightwards: {
    height: 20,
    width: 20
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {title, description, showArrow, onForward} = this.props;
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          onForward(title);
        }}>
        <View style={styles.textCell}>
          <Text style={styles.title}>{title}</Text>
          {description ? <Text style={styles.description}>{description}</Text> : null}
        </View>
        {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
      </TouchableOpacity>
    )
  }
}
