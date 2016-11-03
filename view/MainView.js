import React, {Component} from 'react';
import {ScrollView, ListView, View} from 'react-native';
import {ImageCell} from '../pure_module/src';

export default class MainView extends Component {

  _getImage(componentName){
    let imageUri;
    switch(componentName){
      case 'Button':
        imageUri = require("../image/button.png");
        break;
      case 'List':
        imageUri = require("../image/list.png");
        break;
      case 'Tips':
        imageUri = require("../image/tips.png");
        break;
      case 'TabNav':
        imageUri = require("../image/tab.png");
        break;
      case 'Search':
        imageUri = require("../image/search.png");
        break;
      case 'Dialog':
        imageUri = require("../image/dialog.png");
        break;
      // case 'Actionsheet':
      //   imageUri = require("../image/actionsheet.png");
      //   break;
      case 'Share':
        imageUri = require("../image/share.png");
        break;
      case 'Menu':
        imageUri = require("../image/menu.png");
        break;
      default:
        imageUri = require("../image/list.png");
    }
    return imageUri;
}

  render(){
    return(
      <ScrollView style={this.props.style}>
        <ListView
          dataSource={this.props.ds}
          renderRow={(rowData) =>
            <ImageCell
              onForward={this.props.onForward}
              title={rowData}
              imageSource={this._getImage(rowData)}
              showArrow={true}
            ></ImageCell>
          }
          renderSeparator = {(sectionID, rowID, adjacentRowHighlighted) =>
            <View
              key={`${sectionID}-${rowID}`}
              style={{alignSelf: 'stretch', marginLeft: 46, height: 0.5, backgroundColor: '#dedfe0'}}
            />
          }
        />
    </ScrollView>
    )
  }
}
