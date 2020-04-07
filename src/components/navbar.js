import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar () {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>

      <div className="collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn">
              <FontAwesomeIcon icon={faGlobeAsia} /> En
            </button>
          </li>
          <li className="nav-item noti">
            <button className="btn" type="button">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="noti-icon-badge"></span>
            </button>
          </li>
          <li className="nav-item noti">
            <button className="btn" type="button">
              <FontAwesomeIcon icon={faBell} />
              <span className="noti-icon-badge"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
