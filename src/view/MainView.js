import React, {Component} from 'react';
import {ScrollView, ListView, View} from 'react-native';
import SimpleCell from '../component/lists/SimpleCell';

export default class MainView extends Component {

  render(){
    return(
      <ScrollView style={this.props.style}>
        <ListView
          dataSource={this.props.ds}
          renderRow={(rowData) =>
            <SimpleCell onForward={this.props.onForward}>{rowData}</SimpleCell>
          }
          renderSeparator = {(sectionID, rowID, adjacentRowHighlighted) =>
            <View
              key={`${sectionID}-${rowID}`}
              style={{alignSelf: 'stretch', marginLeft: 46, height: 0.5, backgroundColor: '#bbb'}}
            />
          }
        />
    </ScrollView>
    )
  }
}
