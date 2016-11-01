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
    lineHeight: 21,
    color: colors.btDisabledText,
    marginLeft: 10,
    marginRight: 20
  },
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
  },
  image: {
    width: 34,
    height: 34,
    marginLeft: 6
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {title, description, showArrow, onForward, imageSource} = this.props;
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          onForward(title);
        }}>
        <View style={{flexDirection: "row", alignItems:"center"}}>
          <Image source={imageSource} style={styles.image} />
          <View style={{flexDirection: "column"}}>
            <Text style={styles.title}>{title}</Text>
            {description ? <Text style={styles.description}>{description}</Text> : null}
          </View>
        </View>
        {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
      </TouchableOpacity>
    )
  }
}
