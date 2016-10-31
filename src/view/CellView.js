import React, {Component} from 'react';
import {ScrollView, ListView, Text, View} from 'react-native';
import TextCell from '../component/listCells/TextCell';

export default class CellView extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([
      'SingleTextListCell', 'SingleTextListCellWithDescription'
    ]);
  }

  _onForward(data){
    alert(data);
  };

  render(){
    return(
      <ScrollView style={this.props.style}>
        <ListView
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <TextCell
              onForward={() => this._onForward(rowData)}
            >{rowData}</TextCell>
          }
          renderSeparator = {(sectionID, rowID, adjacentRowHighlighted) => {
            if(rowID == this.dataSource.rowIdentities[0].length - 1){
              return null;
            }else{
              return(
                <View
                  key={`${sectionID}-${rowID}`}
                  style={{alignSelf: 'stretch', marginLeft: 10, height: 0.5, backgroundColor: '#dedfe0'}}
                />
            );
            }
          }}
          renderHeader = {() =>
            <View
              style={{alignSelf: 'stretch', height: 0.5, backgroundColor: '#cbcbcb'}}
            />
          }
          renderFooter = {() =>
            <View
              style={{alignSelf: 'stretch', height: 0.5, backgroundColor: '#cbcbcb'}}
            />
          }
        />
    </ScrollView>
    )
  }
}