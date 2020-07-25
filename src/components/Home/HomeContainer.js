import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

class HomeContainer extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Home news={this.props.news} role={this.props.role} />
    )
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(HomeContainer);