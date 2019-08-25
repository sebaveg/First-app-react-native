import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Movie from './screens/containers/movie'

import api from '../utils/api';

class AppLayout extends Component {
  async componentDidMount() {
    const categories = await api.getMovies()
    this.props.dispatch({
      type: 'GET_CATEGORY_LIST',
      payload: {
        categories
      }
    })
    const movies = await api.getSuggestion(10)
    this.props.dispatch({
      type: 'GET_SUGGESTION_LIST',
      payload: {
        movies
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList />
        <SuggestionList />
        <Text>Main</Text>
        <Text>Footer</Text>
      </Home>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout)