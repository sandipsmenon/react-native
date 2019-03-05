import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  Alert,
  StyleSheet,
  NativeModules,
  DeviceEventEmitter,
  AppRegistry,
} from 'react-native'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HeaderComponent from './src/HeaderComponent';
import BodyComponent from './src/BodyComponent'
import FooterComponent from './src/FooterComponent'
import TransactionComponent from './src/TransactionComponent'
import { Container } from 'native-base';

import CustomCounter from './CustomCounter';

class App extends React.Component {

  _showToast = () => NativeModules.Toast.show(
    'Here is a native toast!',
    NativeModules.Toast.LENGTH_SHORT
  )

  _triggerAlert = () => NativeModules.Alert.trigger()

  _showAlert = message => Alert.alert(message)

  _onCountChange = event => {
    if (this._countFirstChanged) return
    this._countFirstChanged = true
    Alert.alert(`The counter changed for the first time!\nIts value is ${event.nativeEvent.count}.`)
  }

  componentWillMount() {
    DeviceEventEmitter.addListener(NativeModules.Alert.EVENT_SHOW, this._showAlert)
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(NativeModules.Alert.EVENT_SHOW, this._showAlert)
  }

  render() {
    return (
      <Container>
        <HeaderComponent />
        <BodyComponent/>
        <FooterComponent />
      </Container>
     
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  hello: {
    margin: 15,
    fontSize: 26,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
  },
  button: {
    padding: 20,
    margin: 15,
    backgroundColor: 'lightgray',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: 'black',
  },
  counter: {
    width: 150,
    height: 150,
    margin: 15,
    backgroundColor: 'lightgray',
  },
})

AppRegistry.registerComponent('TheNativeParts', () => App)