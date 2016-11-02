import React, {Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import colors from '../config/colors';

const maxLimit = 40;

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
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {title, description} = this.props;
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
}
