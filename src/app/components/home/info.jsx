import React, {Component} from 'react';

export class Info extends Component {
  render() {
    return (
      <p>
        <li>
          Something
        </li>
        <li>
          Something Else
        </li>
        <li>
          And Something Else
        </li>

        <button
          role="button"
          onClick={() => (this.props.toggleStep(1))}
          className="primary lg">
          GO!
        </button>
      </p>
    )
  }
}

export default Info;
