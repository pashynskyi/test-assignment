import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { requestUsers } from '../../../redux/reducers/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers()
  }

  render() {
    return (
      !this.props.isReady ? "Loading..." :
      <Users users={this.props.users} />
    )
  }
}

let mapStateToProps = ({users}) => {
  return {
    users: users.users,
    isReady: users.isReady
  }
}

export default connect(mapStateToProps, { requestUsers })(UsersContainer);