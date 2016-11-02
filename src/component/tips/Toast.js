import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, Image, Animated} from 'react-native';

export default class Toast extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true,
      modalTop: new Animated.Value(-50),
    };
  }

  _setModalVisible(visible){
    this.setState({
      modalVisible: visible
    });
  }

  componentDidMount(){
    this.state.modalTop.setValue(-50);
    Animated.spring(
      this.state.modalTop,
      {
        toValue: 0,
        friction: 7
      }
    ).start();
  }

  componentWillUnmount(){
    Animated.spring(
      this.state.modalTop,
      {
        toValue: -50,
        friction: 7
      }
    ).start();
  }

  render(){
    const { backgroundColor } = this.props;
    return(
      <Modal
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
      >
        <Animated.View style={[styles.toast, {top: this.state.modalTop, backgroundColor: backgroundColor}]}>
          <TouchableOpacity onPress={() => {
              this._setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={styles.text}>Hide Modal</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  toast: {
    paddingTop: 20,
    height: 50,
    position: 'relative',
    zIndex: 10000,
    alignItems: 'flex-start'
  },
  text: {
    color: 'white',
  }
});