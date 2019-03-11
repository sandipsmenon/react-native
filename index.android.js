import {
  StyleSheet,
  AppRegistry,
} from 'react-native'
import React from 'react';
import HeaderComponent from './src/HeaderComponent';
import BodyComponent from './src/BodyComponent';
import FooterComponent from './src/FooterComponent';
import { Container } from 'native-base';


class App extends React.Component {



  render() {
    return (
      <Container>
        <HeaderComponent />
        <BodyComponent />
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