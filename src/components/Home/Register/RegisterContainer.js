import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import { requestToken, requestPositions, registerUser } from '../../../redux/reducers/registerReducer';


class RegisterContainer extends React.Component {

  state = {
    selectedPhoto: '',
    warningClass: false // file upload button (field-file)
  }

  toggleWarningClass = () => {
    this.setState({ warningClass: !this.state.warningClass })
  }

  addWarningClass = () => {
    this.setState({ warningClass: true })
  }

  addSelectedPhoto = (e) => {
    return this.setState({ selectedPhoto: e })
  }

  onSubmit = (registerData) => {
    if (this.state.selectedPhoto && !this.state.warningClass) {
      this.props.registerUser(registerData, this.state.selectedPhoto, this.props.token)
    }
  }

  componentDidMount() {
    this.props.requestToken()
    this.props.requestPositions()
  }

  render() {
    return (
      !this.props.isReady ? "Loading..." :
        <Register
          onSubmit={this.onSubmit}
          positions={this.props.positions}
          addSelectedPhoto={this.addSelectedPhoto}
          photoName={this.state.selectedPhoto.name}
          photoSize={this.state.selectedPhoto.size}
          warningClass={this.state.warningClass}
          toggleWarningClass={this.toggleWarningClass}
          addWarningClass={this.addWarningClass}
        />
    )
  }
}

let mapStateToProps = ({ register }) => {
  return {
    token: register.token,
    positions: register.positions,
    isReady: register.isReady
  }
}

export default connect(mapStateToProps, { requestToken, requestPositions, registerUser })(RegisterContainer);