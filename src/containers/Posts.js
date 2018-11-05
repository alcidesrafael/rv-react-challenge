import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import { clearSearch } from '../actions/search'
import Posts from '../components/Posts'

class PostsCont extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(clearSearch())
    this.props.dispatch(fetchPosts())
  }

  componentWillUnmount() {
    this.props.dispatch(clearSearch())
  }

  render() {
    return <Posts {...this.props} />
  }
}

const mapStateToProps = state => {
  const { isFetching, posts } = state.posts
  return {
    isFetching,
    posts,
  }
}

export default connect(mapStateToProps)(PostsCont)
