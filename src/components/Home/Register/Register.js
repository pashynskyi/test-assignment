import React from 'react';
import { RegisterReduxForm } from './RegisterReduxForm/RegisterReduxFrom';

const Register = ({ onSubmit, positions }) => {
  return (
    <article className="register-container">
      <div>
        <h1>Register to get a work</h1>
        <p>
          Attention! After successful registration and alert,
          update the list of users in the block from the top
        </p>
        <RegisterReduxForm onSubmit={onSubmit} positions={positions} />
      </div>
    </article>
  )
}

export default Register;