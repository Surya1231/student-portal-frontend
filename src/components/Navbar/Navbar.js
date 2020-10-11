/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/scss/navbar.scss';
import Auth from '../Auth/Auth';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { pathname } = this.props;
    return (
      <>
        <div className="d-md-block navbar-custom navbar-desktop">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              Student Portal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${pathname.indexOf('/notes') !== -1 ? 'active' : ''}`}>
                  <Link className="nav-link" to="/notes">
                    Notes
                  </Link>
                </li>
                <li className={`nav-item ${pathname.indexOf('/buysell') !== -1 ? 'active' : ''}`}>
                  <Link className="nav-link" to="/buysell">
                    Buy/Sell
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hostels
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">
                      Hostel 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Hostel 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Hostel 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Clubs
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">
                      Hostel 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Hostel 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Hostel 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">
                      Developers
                    </a>
                    <a className="dropdown-item" href="#">
                      Contributors
                    </a>
                    <a className="dropdown-item" href="#">
                      Github Repo
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Auth />
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="d-md-none navbar-custom navbar-mobile"> </div>
      </>
    );
  }
}
