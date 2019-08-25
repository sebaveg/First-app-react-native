function videos(state = {}, action) {
  switch (action.type) {
    case 'GET_CATEGORY_LIST':
      return {
        ...state,
        ...action.payload
      }
    case 'GET_SUGGESTION_LIST':
      return {
        ...state,
        ...action.payload
      }
    case 'SELECTED_MOVIE': {
      return {
        ...state,
        selectedMovie: action.payload.movie
      }
    }
    default:
      return state
  }
}

export default videos