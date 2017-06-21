import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
//constants
import {EMAIL_REGEX} from 'constants/app';

const fields = ['email', 'password', 'username', 'handicap']

export class Form extends Component {
  render() {
    const {
      fields: {
        password,
        email,
        username,
        handicap
      },
      handleSubmit,
      loading
    } = this.props;

    return (
      <form id="registration" onSubmit={handleSubmit}>
        <div>
          <label>
            Choose a Username
          </label>
          <br/>
          <input
            placeholder="Username"
            {...username}
            className="full-width"
            type="text" />
        </div>
        <div>
          <label>
            What's Your Handicap
          </label>
          <br/>
          <input
            placeholder="Handicap"
            {...handicap}
            className="full-width"
            type="number" />
        </div>
        <div>
          <label>
            Email
          </label>
          <br/>
          <input
            placeholder="Email"
            {...email}
            className="full-width"
            type="email" />
        </div>
        <div>
          <label>
            Password
          </label>
          <input
            placeholder="Password"
            {...password}
            className="full-width"
            type="password"/>
        </div>
        <div className='actions'>
          <button
            disabled={loading}
            type="submit"
            className="primary lg">
            {loading ? 'Please Wait...' : 'Create Account'}
          </button>
          <div className="top10 text-center">
            <small>By signing up, you agree to our <a target="_blank" href="/terms-of-use">terms</a>, and have read our <a target="_blank" href="/privacy-policy">privacy policy.</a></small>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  fields
})(Form);
