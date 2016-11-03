import React from 'react';
import {ListView, Image, View, ScrollView} from 'react-native';
import {ImageCell} from '../pure_module/src';

const MainListView = ({style, onForward}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = ds.cloneWithRows([
      'Button', 'Cell', 'Tips', 'TabNav', 'Search', 'Dialog', 'Menu', 'Actionsheet', 'Share'
    ]);

  function _getImage(componentName){
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

  return(
    <ScrollView style={style}>
      <Image
        source={require("../image/pure-logo.png")}
        style={{height: 41.5, width: 181.5, alignSelf: "center"}}
      />
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) =>
          <ImageCell
            onForward={onForward}
            title={rowData}
            imageSource={_getImage(rowData)}
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

export default MainListView;