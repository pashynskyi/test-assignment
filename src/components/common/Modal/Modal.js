import React from 'react';

const Modal = ({ clearNewUser }) => {
  const onClearNewUser = () => {
    clearNewUser()
  }
  return (
    <article className="modal-container">
      <div className="modal">
        <header>
          <h1>Congratulations</h1>
          <span onClick={onClearNewUser}>&#10006;</span>
        </header>
        <p>You have successfully passed the registration</p>
        <div>
          <button className="button" onClick={onClearNewUser}>Great</button>
        </div>
      </div>
    </article>
  )
}

export default Modal;