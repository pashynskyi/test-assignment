import React from 'react';
import photoCover from '../../../assets/images/photo-cover.png';
import UserBtnContainer from '../../common/Button/UserBtnContainer';

const Users = ({ users, totalPages }) => {
  const usersElements = users.map((user) => (
    <div className="user-card-box" key={user.id}>
      <div className="user-card">
        <img src={user.photo !== null ? user.photo : photoCover} alt='userIcon' />
        <div className="user-info">
          <div className="popup-box">
            <h2>{user.name}</h2>
            <span data-descr={user.name}></span>
          </div>
          <p>{user.position}</p>
          <div className="popup-box">
            <p>{user.email}</p>
            <span data-descr={user.email}></span>
          </div>
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
          {usersElements}
        </div>
        {totalPages.totalPages !== totalPages.currentPage &&
          <UserBtnContainer />
        }

      </div>
    </article>
  )
}

export default Users;