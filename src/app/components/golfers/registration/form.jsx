import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
//constants
import {EMAIL_REGEX} from 'constants/app';

const fields = ['email', 'password']

export class Form extends Component {
  render() {
    const {
      fields: {
        password,
        email
      },
      handleSubmit,
      loading
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email
            </label>
            <input
              {...email}
              className="full-width"
              type="email" />
          </div>
          <div>
            <label>
              Pick a Password
            </label>
            <input
              {...password}
              className="full-width"
              type="password"/>
          </div>
          <div className='actions'>
            <button type="submit" className="primary lg">
              Create Account
            </button>
            <div className="top10 text-center">
              <small>By signing up, you agree to our <a target="_blank" href="/terms-of-use">terms</a>, and have read our <a target="_blank" href="/privacy-policy">privacy policy.</a></small>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'registration',
  fields
})(Form);
