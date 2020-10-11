/* eslint-disable react/prop-types */
import React from 'react';

export const ErrorMessage = ({ message }) => {
  return <div className="alert alert-danger">{message}</div>;
};

export const SuccessMessage = ({ message }) => {
  return (
    <div className="alert alert-success">
      <b> x </b>
      {message}
      <b> x </b>
    </div>
  );
};
