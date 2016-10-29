/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

export default class QUI extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'QButton', 'QModal'
      ])
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.listTitle}>{rowData}</Text>}
        />
      </View>
    );
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

AppRegistry.registerComponent('QUI', () => QUI);
