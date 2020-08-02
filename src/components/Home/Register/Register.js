import React from 'react';
import { RegisterReduxForm } from './RegisterReduxForm/RegisterReduxFrom';
import ModalContainer from '../../common/Modal/ModalContainer';

const Register = ({
  onSubmit,
  positions,
  isSuccess,
  addSelectedPhoto,
  photoName,
  photoSize,
  warningClass,
  toggleWarningClass,
  addWarningClass
}) => {
  return (
    <article className="register-container">
      <div>
        <h1>Register to get a work</h1>
        <p>
          Attention! After successful registration and alert,
          update the list of users in the block from the top
        </p>
        <RegisterReduxForm
          onSubmit={onSubmit}
          positions={positions}
          addSelectedPhoto={addSelectedPhoto}
          photoName={photoName}
          photoSize={photoSize}
          warningClass={warningClass}
          toggleWarningClass={toggleWarningClass}
          addWarningClass={addWarningClass}
        />
      </div>
      {isSuccess &&
        <ModalContainer />
      }
    </article>
  )
}

export default Register;