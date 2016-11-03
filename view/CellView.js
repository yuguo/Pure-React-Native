import React, {Component} from 'react';
import {ScrollView, ListView, Text, View, StyleSheet} from 'react-native';
import {TextCell, ImageCell} from '../pure_module/src/listCells';

export default class CellView extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows([
      {title: '单行文本条目'},
      {title: '双行文本条目',
        description: '包括一个标题和一句描述'
      },
      {title: '带上箭头',
        description: 'Description description description description.',
        showArrow: true
      }
    ]);
    this.dataSource2 = ds.cloneWithRows([
      {
        title: '带图片的单行文本条目',
        imageUrl: {uri: 'https://qlogo2.store.qq.com/qzone/289796721/289796721/100'}
      },
      {
        title: '双行文本条目',
        imageUrl: {uri: 'https://qlogo2.store.qq.com/qzone/289796721/289796721/100'},
        description: '包括一个标题和一句描述'
      },
      {
        title: '带上箭头',
        imageUrl: {uri: 'https://qlogo2.store.qq.com/qzone/289796721/289796721/100'},
        description: 'Description description description description.',
        showArrow: true
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
          style={styles.listView}
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <TextCell
              onForward={() => this._onForward(rowData)}
              title={rowData.title}
              description={rowData.description}
              showArrow={rowData.showArrow}
            />
          }
          renderSeparator = {this._renderSepatator.bind(this)}
          renderHeader = {this._renderHeader}
          renderFooter = {this._renderHeader}
        />

        <ListView
          dataSource={this.dataSource2}
          renderRow={(rowData) =>
            <ImageCell
              onForward={() => this._onForward(rowData)}
              title={rowData.title}
              description={rowData.description}
              showArrow={rowData.showArrow}
              imageSource={rowData.imageUrl}
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

const styles = StyleSheet.create({
  listView: {
    marginBottom: 20,
  }
});