import React from 'react';
import PropTypes from 'prop-types';
import UserItemContainer from './userItemContainer';

const UserList = ({ users }) => (
  <div>
    <div>
      <ul>
        {users.map((user) => (
          <UserItemContainer key={user.id} user={user} />
        ))}
      </ul>
    </div>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserList;
