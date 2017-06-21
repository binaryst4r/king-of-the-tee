import React, {Component} from 'react';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showTeamForm: false
    }
  }
  render() {
    return (
      <div id="dashboard">
        <h2>
          My Teams
        </h2>
        <button className="primary md" onClick={(e) => this.setState({
          showTeamForm: true
        })}>
          Add Team
        </button>
        <p>

        </p>
      </div>
    )
  }
}

export default Dashboard
