import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class Toast extends Component {
  constructor(props){
    super(props);
    this.state = {modalVisible: true};
  }

  _setModalVisible(visible){
    this.setState({modalVisible: visible});
  }

  render(){
    const { backgroundColor } = this.props;
    return(
      <Modal
        animationType={"slide"}
        style={{backgroundColor:'blue'}}
        visible={this.state.modalVisible}
      >
        <View style={[styles.toast, {backgroundColor: backgroundColor}]}>
          <TouchableOpacity onPress={() => {
              this._setModalVisible(!this.state.modalVisible)
            }}>
            <Text style={styles.text}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  toast: {
    // position: 'absolute',
    height:50,
    top:0,
    left:0,
    flexDirection: 'row',
    zIndex: 10000,
    alignItems: 'center'
  },
  text: {
    color: 'white',
  }
});