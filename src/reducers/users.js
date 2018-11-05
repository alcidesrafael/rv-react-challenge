import { REQUEST_USERS, RECEIVE_USERS } from '../actions/users'

export const users = (
  state = {
    isFetching: false,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_USERS: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case RECEIVE_USERS: {
      return {
        isFetching: false,
        users: action.users,
      }
    }
    default:
      return state
  }
}
