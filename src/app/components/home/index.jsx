import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';
import {register} from 'actions/auth';
import Info from './info';
import RegistrationForm from '../golfers/registration/form';
import Zipcode from './zipcode';
import {setLocation, getLocation} from 'utils/location';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      zipcode: getLocation() ? getLocation().zipcode : null,
      step: 0
    };
    this.toggleStep = this.toggleStep.bind(this);
    this.changeZipcode = this.changeZipcode.bind(this);
    this.register = this.register.bind(this);
  }

  register(data) {
    const {register} = this.props
    let payload = {
      email: data.email,
      handicap: data.handicap,
      username: data.username,
      password: data.password,
      password_confirmation: data.password,
      zipcode: getLocation().zipcode
    }

    register(payload);
  }

  changeZipcode(zipcode) {
    this.setState({
      zipcode: zipcode
    })

    if (zipcode.length === 5) {
      setLocation({zipcode: zipcode})
    }
  }

  toggleStep(step) {
    this.setState({
      step: step
    });
  }

  render() {
    const {step} = this.state;
    const {redirect, loading} = this.props;
    let registration;

    switch (step) {
    case 0:
      registration = <Info toggleStep={this.toggleStep} step={step} />
      break;
    case 1:
      registration = (
        <Zipcode
          toggleStep={this.toggleStep}
          zipcode={this.state.zipcode}
          changeZipcode={this.changeZipcode} />
      )
      break;
    case 2:
      registration = (
        <RegistrationForm
          loading={loading}
          onSubmit={this.register}
          step={step} />
      )
      break
    default:
      registration = <Info step={step} />
    }

    return (
      <div id="homepage">
        <div id="left-side">
          <h1>
            King <small> of the </small> Tee
          </h1>
        </div>
        <div id="right-side">
          {registration}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state.auth.loading
  }),
  dispatch => ({
    redirect: bindActionCreators(push, dispatch),
    register: bindActionCreators(register, dispatch),
  })
)(Home);
