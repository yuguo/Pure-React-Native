import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TextUnit from './TextUnit';
import styles from './styles';

const ImageCell = ({title, description, showArrow, onForward, imageSource}) => {
  return(
    <TouchableOpacity
      style={styles.cell}
      onPress={() => {
        onForward(title);
      }}>
      <View style={{flexDirection: "row", alignItems:"center"}}>
        <Image source={imageSource} style={styles.image} />
        <TextUnit title={title} description={description} />
      </View>
      {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
    </TouchableOpacity>
  )
};

export default ImageCell;
