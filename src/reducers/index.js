import { combineReducers } from 'redux'
import { users } from './users'
import { posts } from './posts'
import { search } from './search'

const rootReducer = combineReducers({
  users,
  posts,
  search,
})

export default rootReducer
