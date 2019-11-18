import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {Container, Header, Content, Tab, Tabs,Text } from 'native-base';
import { Authors } from './Author';
export default  class App extends Component {
  render() {
    return (
      <Container style={[styles.margin]}>
          <Tabs initialPage={0}>
            <Tab heading="Livros">
              <View style={[ styles.container, { backgroundColor: '#ccc' } ]}>
                      <Text>Aba 1</Text> 
              </View>
            </Tab>
            <Tab heading="Autores">
              <View style={[ styles.container, { backgroundColor: '#673ab7' } ]}>
                    <Authors></Authors>
              </View>
            </Tab>
            <Tab heading="Perfil">
              <View style={[ styles.container, { backgroundColor: '#eee' } ]}>
                     <Text>Aba 3</Text>             
              </View>
            </Tab>
          </Tabs>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    marginTop: 35,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});