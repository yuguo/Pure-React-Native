import React, {Component} from 'react';
import {ScrollView, ListView, Text, View} from 'react-native';
import TextCell from '../component/listCells/TextCell';

export default class CellView extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([
      {title: 'SingleTextListCell'},
      {title: 'SingleTextListCellWithDescription',
        description: 'Description description description description.'
      }
    ]);
  }

  _onForward(data){
    alert(data);
  };

  _renderSepatator(sectionID, rowID, adjacentRowHighlighted){
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
  };

  _renderHeader(){
    return(<View
      style={{alignSelf: 'stretch', height: 0.5, backgroundColor: '#cbcbcb'}}
    />);
  }

  render(){
    return(
      <ScrollView style={this.props.style}>
        <ListView
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <TextCell
              onForward={() => this._onForward(rowData)}
              title={rowData.title}
              description={rowData.description}
            />
          }
          renderSeparator = {this._renderSepatator.bind(this)}
          renderHeader = {this._renderHeader}
          renderFooter = {this._renderHeader}
        />
    </ScrollView>
    )
  }
}