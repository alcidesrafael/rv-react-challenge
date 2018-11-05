import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import { clearSearch } from '../actions/search'
import Users from '../components/Users'

class UsersCont extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  }

  state = {
    usersFiltered: [],
    isFiltered: false,
  }

  componentDidMount() {
    this.props.dispatch(clearSearch())
    this.props.dispatch(fetchUsers())
  }

  componentWillUnmount() {
    this.props.dispatch(clearSearch())
  }

  render() {
    return <Users {...this.props} />
  }
}

const mapStateToProps = state => {
  const { isFetching, users } = state.users
  return {
    isFetching,
    users,
  }
}

export default connect(mapStateToProps)(UsersCont)
