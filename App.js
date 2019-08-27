import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLayout from './src/app'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import { store, persistor } from './store'

export default class App extends Component {
  
  render() {
    console.log(this.getData)
    return (
      <Provider store={store} >
        <PersistGate
          loading={<Text>cargando...</Text>}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
