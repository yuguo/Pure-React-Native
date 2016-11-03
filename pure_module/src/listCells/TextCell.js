import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import TextUnit from './TextUnit';
import styles from './styles.js';

const TextCell = ({title, description, showArrow, onForward}) => {
  return (<TouchableOpacity
    style={styles.cell}
    onPress={() => {
      onForward(title);
    }}>
    <TextUnit title={title} description={description} />
    {showArrow ? <Image source={require("../../image/rightwards.png")} style={styles.rightwards} /> : null}
  </TouchableOpacity>
  )
}

export default TextCell;