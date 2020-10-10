/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import Modal from '../Modals/Modal';
import '../../styles/scss/login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginModal: false,
      registerModal: false,
      loginId: '',
      loginPassword: '',
      fullName: '',
      registerId: '',
      registerPassword: '',
    };
  }

  openLoginModal = () => {
    this.setState({
      loginModal: true,
      registerModal: false,
    });
  };

  closeLoginModal = () => {
    this.setState({
      loginModal: false,
      loginId: '',
      loginPassword: '',
    });
  };

  openRegisterModal = () => {
    this.setState({
      registerModal: true,
      loginModal: false,
    });
  };

  closeRegisterModal = () => {
    this.setState({
      registerModal: false,
      fullName: '',
      registerId: '',
      registerPassword: '',
    });
  };

  handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    // const target = e.target;
    // const name = target.name;
    // const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const { loginId, loginPassword } = this.state;
    console.log('loginID', loginId);
    console.log('loginPassword', loginPassword);
    this.closeLoginModal();
  };

  handleRegister = () => {
    const { fullName, registerId, registerPassword } = this.state;
    console.log('fullName', fullName);
    console.log('registerId', registerId);
    console.log('registerPassword', registerPassword);
    this.closeRegisterModal();
  };

  render() {
    const {
      loginModal,
      registerModal,
      loginId,
      loginPassword,
      fullName,
      registerId,
      registerPassword,
    } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-success" onClick={(e) => this.openLoginModal(e)}>
          Login
        </button>

        <Modal show={loginModal} handleClose={(e) => this.closeLoginModal(e)}>
          <div className="form-group">
            <input
              type="text"
              name="loginId"
              value={loginId}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="College ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={(e) => this.handleLogin(e)}
            >
              Login
            </button>
          </div>
          <a href="#" className="modalType" onClick={(e) => this.openRegisterModal(e)}>
            New User ? Register
          </a>
        </Modal>

        <Modal show={registerModal} handleClose={(e) => this.closeRegisterModal(e)}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="registerId"
              value={registerId}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="College ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="registerPassword"
              value={registerPassword}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={(e) => this.handleRegister(e)}
            >
              Register
            </button>
          </div>
          <a href="#" className="modalType" onClick={(e) => this.openLoginModal(e)}>
            Already Registered ? Login
          </a>
        </Modal>
      </div>
    );
  }
}

export default Login;
