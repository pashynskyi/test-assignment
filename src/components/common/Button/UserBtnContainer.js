import React from 'react';
import { connect } from 'react-redux';
import UserBtn from './UserBtn';
import { requestNextUsers } from '../../../redux/reducers/usersReducer';

class UserBtnContainer extends React.Component {

  render() {
    return (
      <UserBtn
        requestNextUsers={this.props.requestNextUsers}
        nextUrl={this.props.nextUrl}
      />
    )
  }
}

let mapStateToProps = ({ users }) => {
  return {
    nextUrl: users.nextUrl
  }
}

export default connect(mapStateToProps, { requestNextUsers })(UserBtnContainer);