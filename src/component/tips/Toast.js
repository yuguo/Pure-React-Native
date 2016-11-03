import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, Image, Animated, Easing} from 'react-native';

export default class Toast extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true,
      modalTop: new Animated.Value(-50),
    };
  }

  _setModalVisible(visible){
    if(visible){
      this.setState({
        modalVisible: visible
      });
    }else{
      Animated.spring(
        this.state.modalTop,
        {
          toValue: -50,
          tension: 100,
          friction: 5,
        }
      ).start(()=>{
        this.setState({
          modalVisible: visible
        });
        this.props.onClosed();
      });
    }
  }

  componentDidMount(){
    this.state.modalTop.setValue(-50);
    Animated.spring(
      this.state.modalTop,
      {
        toValue: -20,
        tension: 100,
        friction: 5,
      }
    ).start();
  }

  render(){
    const { backgroundColor } = this.props;
    return(
      <Modal
        visible={this.state.modalVisible}
        onClosed={this.props.onClosed}
      >
        <Animated.View
          style={[styles.toast,
            {top: this.state.modalTop,
              backgroundColor: backgroundColor
            }]
        }>
          <TouchableOpacity style={styles.touchable} onPress={() => {
              this._setModalVisible(false);
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
    height: 70,
    position: 'relative',
    zIndex: 10000,
    alignItems: 'flex-start'
  },
  touchable: {
    flex:1,
    paddingTop: 25,
    paddingLeft: 10,
    height: 30,
    alignSelf: "stretch",
    justifyContent: 'flex-start'
  },
  text: {
    color: 'white',
    alignSelf: "flex-start",
  }
});