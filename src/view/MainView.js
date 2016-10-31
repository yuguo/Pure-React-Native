import React, {Component} from 'react';
import {ScrollView, ListView, View} from 'react-native';
import ImageCell from '../component/listCells/ImageCell';

export default class MainView extends Component {

  render(){
    return(
      <ScrollView style={this.props.style}>
        <ListView
          dataSource={this.props.ds}
          renderRow={(rowData) =>
            <ImageCell
              onForward={this.props.onForward}
            >{rowData}</ImageCell>
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
