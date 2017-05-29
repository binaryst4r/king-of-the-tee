import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';

export default function requireAuthentication(WrappedComponent) {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      this._checkAuth();
    }

    componentWillReceiveProps() {
      this._checkAuth();
    }

    _checkAuth() {
      const {isAuthenticated, router} = this.props;
      if (!isAuthenticated) {
        router.push('/authentication');
      }
    }

    render() {
      return this.props.isAuthenticated ? <WrappedComponent {...this.props} /> : null;
    }
  }

  AuthenticatedComponent.needs = WrappedComponent.needs;

  return connect(
    state => {
      return {
        isAuthenticated: !!state.auth.token
      };
    },
    dispatch => ({
      router: bindActionCreators(routerActions, dispatch)
    })
  )(AuthenticatedComponent);
}
