import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { requestUsers, requestUpdatedUsers } from '../../../redux/reducers/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers()
  }

  componentDidUpdate(prevProps) {
    if (this.props.newUser !== prevProps.newUser) {
      this.props.requestUpdatedUsers()
    }
  }

  render() {
    return (
      !this.props.isReady ? "Loading..." :
        <Users
          users={this.props.users}
          totalPages={this.props.totalPages}
        />
    )
  }
}

let mapStateToProps = ({ users, register }) => {
  return {
    users: users.users,
    isReady: users.isReady,
    totalPages: users.totalPages,
    newUser: register.newUser
  }
}

export default connect(mapStateToProps, { requestUsers, requestUpdatedUsers })(UsersContainer);