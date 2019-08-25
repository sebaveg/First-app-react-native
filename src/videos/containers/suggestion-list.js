import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestions';
import { connect } from 'react-redux'

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }
  renderItem = ({ item }) => {
    return (
      <Suggestion {...item} onPress={() => {this.viewMovie(item) }} />
    )
  }
  render() {
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.movies
  }
}

export default connect(mapStateToProps)(SuggestionList)