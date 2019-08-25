import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLayout from './src/app'

import { Provider } from 'react-redux'
import store from './store'

export default class App extends Component {
  
  render() {
    console.log(this.getData)
    return (
      <Provider store={store} >
        <AppLayout />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
