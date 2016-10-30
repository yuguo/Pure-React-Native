import React, {Component} from 'react';
import {View, ListView, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class MainView extends Component {

  render(){
    return(
      <View style={styles.container}>
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
  container: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  listTitle: {
    fontSize: 30
  }
});