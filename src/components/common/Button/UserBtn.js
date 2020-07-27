import React from 'react';

const UserBtn = ({ requestNextUsers, nextUrl }) => {
  const onRequest = () => {
    requestNextUsers(nextUrl)
  }

  return (
    <button className="button user-btn" onClick={onRequest}>Show more</button>
  )
}

export default UserBtn;