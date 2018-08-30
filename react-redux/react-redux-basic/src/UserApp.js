import React from 'react';

import CreateUserContainer from './containers/CreateUserContainer';
import UserContainer from './containers/UserContainer';

const UserApp = () => (
  <div>
    <CreateUserContainer />
    <UserContainer />
  </div>
)

export default UserApp;