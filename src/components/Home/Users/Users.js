import React from 'react';
import photoCover from '../../../assets/images/photo-cover.png';
import UserBtnContainer from '../../common/Button/UserBtnContainer';

const Users = ({ users }) => {
  const userElements = users.map((user) => (
    <div className="user-card-box" key={user.id}>
      <div className="user-card">
        <img src={user.photo !== null ? user.photo : photoCover} alt='userIcon' />
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>{user.position}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <article className="users-container">
      <div>
        <h1>Our cheerful users</h1>
        <p>Attention! Sorting users by registration date</p>
        <div className="user-row">
          {userElements}
        </div>
        <UserBtnContainer />
      </div>
    </article>
  )
}

export default Users;