import React, {Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import styles from './styles.js';

const TextUnit = ({title, description}) => {
  const maxLimit = 40;
  return(
    <View style={{flexDirection: "column"}}>
      <Text style={styles.title}>{
          ((title).length > maxLimit) ?
          (title).substring(0, maxLimit - 3) + '...' : title
        }</Text>
      {description ? <Text style={styles.description}>{
          ((description).length > maxLimit) ?
          (description).substring(0, maxLimit - 3) + '...' : description
        }</Text> : null}
    </View>
  )
}

TextUnit.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}

export default TextUnit;