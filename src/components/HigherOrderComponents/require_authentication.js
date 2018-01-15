import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: state.auth
  });

  return connect(mapStateToProps)(Authentication);
}

export default requireAuth;
