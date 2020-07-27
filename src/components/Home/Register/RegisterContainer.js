import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { requestPositions } from '../../../redux/reducers/registerReducer';

class RegisterContainer extends React.Component {

  onSubmit = (registerData) => {
    console.log(registerData)
  }

  componentDidMount() {
    this.props.requestPositions()
  }

  render() {
    return (
      !this.props.isReady ? "Loading..." :
        <Register
          onSubmit={this.onSubmit}
          positions={this.props.positions}
        />
    )
  }
}

let mapStateToProps = ({ register }) => {
  return {
    positions: register.positions,
    isReady: register.isReady
  }
}

export default connect(mapStateToProps, { requestPositions })(RegisterContainer);