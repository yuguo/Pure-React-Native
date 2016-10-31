import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 18,
    marginLeft: 10
  },
  cell: {
    height: 46,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  image: {
    width: 34,
    height: 34,
    margin: 6
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let imageUri;
    switch(this.props.children){
      case 'Button':
        imageUri = require("../../image/button.png");
        break;
      case 'List':
        imageUri = require("../../image/list.png");
        break;
      case 'Tips':
        imageUri = require("../../image/tips.png");
        break;
      case 'Text':
        imageUri = require("../../image/text.png");
        break;
      case 'TabNav':
        imageUri = require("../../image/tab.png");
        break;
      case 'Search':
        imageUri = require("../../image/search.png");
        break;
      case 'Dialog':
        imageUri = require("../../image/dialog.png");
        break;
      // case 'Actionsheet':
      //   imageUri = require("../../image/actionsheet.png");
      //   break;
      case 'Share':
        imageUri = require("../../image/share.png");
        break;
      case 'Menu':
        imageUri = require("../../image/menu.png");
        break;
      default:
        imageUri = require("../../image/list.png");
    }

    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          this.props.onForward(this.props.children);
        }}>
        <Image source={imageUri} style={styles.image} />
        <Text style={styles.listTitle}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
