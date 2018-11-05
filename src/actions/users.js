export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const requestUsers = () => ({
  type: REQUEST_USERS,
})

export const receiveUsers = json => ({
  type: RECEIVE_USERS,
  users: json,
})

export const fetchUsers = () => dispatch => {
  dispatch(requestUsers())
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => dispatch(receiveUsers(json)))
}
