import { createStore } from 'redux'
import reducer from './reducers/videos'

const state = {
  video: 'platzi'
}

const store = createStore(reducer, state)

export default store