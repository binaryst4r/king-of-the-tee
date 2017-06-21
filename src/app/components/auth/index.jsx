import React, {Component, PropTypes} from 'react';
import {login, register} from 'actions/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Tabs, Tab} from 'material-ui/Tabs';

export class Authentication extends Component {
  render() {
    return (
      <div id="authentication">
        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="onActive"
            data-route="/home"
            onActive={alert('hey')}>
            <div>
              <h2>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      auth: state.auth
    }
  },
  dispatch => ({
    login: bindActionCreators(login, dispatch),
    register: bindActionCreators(register, dispatch)
  })
)(Authentication);
