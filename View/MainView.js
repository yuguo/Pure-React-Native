import React, {Component} from 'react';
import {View, ListView, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class MainView extends Component {

  render(){
    return(
      <View style={this.props.style}>
        <ListView
          dataSource={this.props.ds}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => {
                this.props.onForward(rowData);
              }}>
              <Text style={styles.listTitle}>{rowData}</Text>
            </TouchableHighlight>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 30
  }
});