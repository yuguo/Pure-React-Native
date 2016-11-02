import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TextUnit from './TextUnit';
import styles from './styles';

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {title, showArrow, onForward, imageSource} = this.props;
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          onForward(title);
        }}>
        <View style={{flexDirection: "row", alignItems:"center"}}>
          <Image source={imageSource} style={styles.image} />
          <TextUnit {...this.props} />
        </View>
        {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
      </TouchableOpacity>
    )
  }
}
