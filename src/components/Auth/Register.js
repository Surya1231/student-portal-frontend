/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ErrorMessage, SuccessMessage } from '../common/Common';

const initialState = {
  fullName: '',
  collegeId: '',
  password: '',
  confirmPassword: '',
  error: '',
  success: '',
  loading: '',
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromProps(nextProps, oldState) {
    const { show } = nextProps;
    if (!show) return initialState;
    return oldState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true, success: 'Successfully registered' });
  };

  render() {
    const { fullName, collegeId, password, confirmPassword, error, success, loading } = this.state;
    return (
      <div>
        {success && <SuccessMessage message={success} />}
        {error && <ErrorMessage message={error} />}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter your full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="collgeId">CollegeId</label>
            <input
              type="text"
              name="collegeId"
              value={collegeId}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Your college Id (2017UBBXXXX)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="collgeId">Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="collgeId">Confirm password</label>
            <input
              type="text"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter confirm password"
              required
            />
          </div>
          <div className="form-group mb-0 pt-2">
            <button type="submit" className="btn btn-info px-4" disabled={loading}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
