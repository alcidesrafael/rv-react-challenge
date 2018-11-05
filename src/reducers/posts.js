import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/posts'

export const posts = (
  state = {
    isFetching: false,
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_POSTS: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case RECEIVE_POSTS: {
      return {
        isFetching: false,
        posts: action.posts,
      }
    }
    default:
      return state
  }
}
