import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import api from './utils/api';

export default class App extends Component {
  state = {
    debatesList: []
  }
  async componentDidMount() {
    const movies = await api.getSuggestion(10)
    this.setState({
      debatesList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <SuggestionList list={this.state.debatesList}/>
        <Text>Main</Text>
        <Text>Footer</Text>
      </Home>
    );
  }
}

const styles = StyleSheet.create({
});
