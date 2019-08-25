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
    default:
      return state
  }
}

export default videos