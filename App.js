import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'

import { Provider } from 'react-redux'
import store from './store'

import api from './utils/api';

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount() {
    const movies = await api.getSuggestion(10)
    const categories = await api.getMovies()
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Provider store={store} >
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <CategoryList list={this.state.categoryList} />
          <SuggestionList list={this.state.suggestionList} />
          <Text>Main</Text>
          <Text>Footer</Text>
        </Home>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
