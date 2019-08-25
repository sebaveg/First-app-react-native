import { createStore } from 'redux'
import reducer from './reducers/videos'

const state = {
  categories: [],
  movies: []
}

const store = createStore(reducer, state)

export default store