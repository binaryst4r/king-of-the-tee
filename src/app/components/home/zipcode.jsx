import React, {Component} from 'react';
import {getLocation} from 'utils/location';

export class Zipcode extends Component {
  constructor() {
    super();
  }

  render() {
    const {zipcode, toggleStep, changeZipcode} = this.props;
    return (
      <div id="zipcode-form">
        <label>Enter Zipcode</label>
        <br/>
        <input
          onChange={(e) => changeZipcode(e.target.value)}
          className="full-width"
          value={zipcode || ""}
          type="text"
          placeholder="Zipcode"/>
        <br />
        <button
          disabled={!getLocation()}
          onClick={() => toggleStep(2)}
          className="primary lg">
          Continue
        </button>
      </div>
    )
  }
}

export default Zipcode;
