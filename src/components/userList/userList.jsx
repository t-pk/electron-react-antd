import React from 'react';
import PropTypes from 'prop-types';
import UserItemContainer from './userItemContainer';

const UserList = ({ users }) => (
  <div>
    <ul>
      {users.map((user) => (
        <UserItemContainer key={user.id} user={user} />
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default UserList;
