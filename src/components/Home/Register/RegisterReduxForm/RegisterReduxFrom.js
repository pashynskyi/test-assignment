import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormsControls';
import Button from '../../../common/Button/Button';

const maxLength255 = maxLengthCreator(255);

export const RegisterForm = ({ handleSubmit, positions, addSelectedPhoto, photoName }) => {

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
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-box">
        <h3>Name</h3>
        <Field
          className="field"
          name="name"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="Your name" />
      </div>
      <div className="field-box">
        <h3>Email</h3>
        <Field
          className="field"
          name="email"
          component={Input}
          type="email"
          validate={[required, maxLength255]}
          placeholder="Your email" />
      </div>
      <div className="field-box">
        <h3>Phone number</h3>
        <Field
          className="field"
          name="phone"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="+380 XX XXX XX XX" />
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
          // className="field"
          id="file"
          type="file"
          accept=".jpg, .jpeg"
          onChange={onSelectedPhoto}
        />
        <div className="field field-file">
          {!photoName ? 'Upload your photo' : photoName}
          <label className='file-label' for="file">
            Browse
        </label>
        </div>
      </div>
      <div>
        <Button type='submit' />
      </div>
    </form>
  );
}

export const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm);