import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  required,
  maxLengthCreator,
  validateEmail,
  minLengthCreator,
  phoneNumber,
  maxFileSize
} from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormsControls';
import Button from '../../../common/Button/Button';

export const RegisterForm = ({
  handleSubmit,
  positions,
  addSelectedPhoto,
  photoName,
  photoSize,
  warningClass,
  toggleWarningClass,
  addWarningClass
}) => {

  const minLength2 = minLengthCreator(2);
  const maxLength60 = maxLengthCreator(60);
  const maxFileSize5 = maxFileSize(photoSize, 5);

  const positionsElements = positions.map((position) => (
    <label key={position.id}>
      <Field
        name="id"
        component={Input}
        type="radio"
        validate={[required]}
        value={`${position.id}`} />
      {position.name}
    </label>
  ));

  const onSelectedPhoto = (e) => {
    if (e.target.files.length) {
      addSelectedPhoto(e.target.files[0]);
      toggleWarningClass()
    }
  }

  const onBlurFieldFile = () => {
    if (!photoName && !warningClass) {
      toggleWarningClass()
    }
  }

  const onClickRegisterBtn = () => {
    if ((!photoName && !warningClass) || maxFileSize5 !== undefined) {
      addWarningClass()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="field-box">
        <h3>Name</h3>
        <Field
          className="field"
          name="testign"
          component={FileInput}
          type="file"
          validate={[required]}
          placeholder="Your name" />
      </div> */}
      <div className="field-box">
        <h3>Name</h3>
        <Field
          className="field"
          name="name"
          component={Input}
          type="text"
          validate={[required, minLength2, maxLength60]}
          placeholder="Your name" />
      </div>
      <div className="field-box">
        <h3>Email</h3>
        <Field
          className="field"
          name="email"
          component={Input}
          type="email"
          validate={[required, validateEmail]}
          placeholder="Your email" />
      </div>
      <div className="field-box">
        <h3>Phone number</h3>
        <Field
          className="field"
          name="phone"
          component={Input}
          type="text"
          validate={[required, phoneNumber]}
          placeholder="+380XX XXX XX XX" />
        <p>Enter phone number in open format</p>
      </div>
      <div className="field-box radio-box">
        <h3>Select your position</h3>
        <div className="position-box">
          {positionsElements}
        </div>
      </div>
      <div className="field-box">
        <h3>Photo</h3>
        <input
          id="file"
          type="file"
          accept=".jpg, .jpeg"
          onChange={onSelectedPhoto}
        />
        <div
          className={(!warningClass && !maxFileSize5) ? "field field-file" : "field field-file warning"}
          data-warn={maxFileSize5 !== undefined ? `${maxFileSize5}` : "Field is required"}
          tabIndex="0"
          onBlur={onBlurFieldFile}
        >
          {(!photoName && !warningClass) && 'Upload your photo'}
          {(!photoName && warningClass) && 'No file chosen'}
          {photoName}
          <label className='file-label' htmlFor="file">
            Browse
          </label>
        </div>
      </div>
      <div className="register-btn-box" onClick={onClickRegisterBtn}>
        <Button type='submit' />
      </div>
    </form>
  );
}

export const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm);