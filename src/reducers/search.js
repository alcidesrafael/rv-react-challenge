import { SEARCH_INPUT, CLEAR_SEARCH } from '../actions/search'

export const search = (
  state = {
    search: '',
  },
  action
) => {
  switch (action.type) {
    case SEARCH_INPUT: {
      return {
        search: action.search,
      }
    }
    case CLEAR_SEARCH: {
      return {
        search: '',
      }
    }
    default:
      return state
  }
}
