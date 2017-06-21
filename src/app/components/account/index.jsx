import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'underscore';
//utils
import {getGolfer} from 'utils/golfer';
//actions
import {actions} from 'actions/resources';
import {logout} from 'actions/auth';
// components
import AccountNav from './common/nav';

export class Account extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    const {
      fetchGolfer
    } = this.props;

    fetchGolfer(getGolfer().id);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {
      golfer
    } = this.props;

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, Object.assign({}, {...this.props}, {...this.props}))
    );

    if (golfer) {
      return (
        <div id='account'>
          <AccountNav
            logout={this.logout}
            golfer={golfer} />
          <div id="content">
            {childrenWithProps}
          </div>
        </div>
      )
    }

    return null;
  }
}

export default connect(
  state => {
    const {golfer} = state.resources.detail;
    return {
      golfer: golfer
    }
  },
  dispatch => ({
    fetchGolfer: bindActionCreators(actions.fetchGolfer, dispatch),
    logout: bindActionCreators(logout, dispatch)
  })
)(Account);
