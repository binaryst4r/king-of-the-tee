import React, {Component} from 'react';
import {Link} from 'react-router';

export class Nav extends Component {
  render() {
    const {golfer, logout} = this.props;
    return (
      <div id='account-nav'>
        <div id="top-content">
          <img
            className="profile"
            src="http://www.golfchannel.com/sites/golfchannel.prod.acquia-sites.com/files/mcilroy_600_swing_sequence_gca.jpg" />
          <h3>
            {golfer.username}
            <br/>
            <small>
              {golfer.handicap} Handicap
            </small>
          </h3>
          <li>
            <Link to=''>Something</Link>
          </li>
          <li>
            <Link to=''>Something</Link>
          </li>
          <li>
            <Link to=''>Something</Link>
          </li>
        </div>

        <div id="bottom-content">
          <Link to="/logout" onClick={logout}>
            Logout
          </Link>
        </div>
      </div>
    )
  }
}

export default Nav;
