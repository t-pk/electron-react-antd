import React from 'react';
import { Navigate } from 'react-router-dom';
import { TOKEN_KEY } from 'renderer/constants';
import { UserListContainer } from '../../components';

const HomePage = () => 
localStorage.getItem(TOKEN_KEY) ?
<UserListContainer />
:
<Navigate to="/login" replace />
;

export default HomePage;
