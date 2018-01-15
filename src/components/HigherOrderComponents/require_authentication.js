import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

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
