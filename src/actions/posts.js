export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPosts = () => ({
  type: REQUEST_POSTS,
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
})

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => fetchUsers(dispatch, posts))
}

const fetchUsers = (dispatch, posts) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => populatePostsWithUsers(dispatch, posts, users))
}

const populatePostsWithUsers = (dispatch, posts, users) => {
  // eslint-disable-next-line
  posts.map(post => {
    // eslint-disable-next-line
    users.find(user => {
      if (user.id === post.userId) {
        post.author = user.name
      }
    })
  })
  dispatch(receivePosts(posts))
}
