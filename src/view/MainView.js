import React, {Component} from 'react';
import {ScrollView, ListView} from 'react-native';
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
        />
    </ScrollView>
    )
  }
}
