import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faBuilding,
  faCog,
  faNewspaper,
  faChartArea,
} from '@fortawesome/free-solid-svg-icons';

function Aside() {
  return (
    <div className="aside">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/account">
            <FontAwesomeIcon icon={faUser} />
            My Account
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/company">
            <FontAwesomeIcon icon={faBuilding} />
            My Company
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/settings">
            <FontAwesomeIcon icon={faCog} />
            My Settings
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/news">
            <FontAwesomeIcon icon={faNewspaper} />
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/analytics">
            <FontAwesomeIcon icon={faChartArea} />
            Analytics
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Aside;