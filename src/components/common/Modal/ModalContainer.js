import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { clearNewUser } from '../../../redux/reducers/registerReducer';

class ModalContainer extends React.Component {

  render() {
    return (
      <Modal clearNewUser={this.props.clearNewUser} />
    )
  }
}

let mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, { clearNewUser })(ModalContainer);