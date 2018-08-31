import React from 'react';

import CreateUserContainer from './containers/CreateUserContainer';
import UpdateUserContainer from './containers/UpdateUserContainer';
import UserContainer from './containers/UserContainer';

const UserApp = () => (
  <div>
    <CreateUserContainer />
    <UserContainer />
    <UpdateUserContainer />
  </div>
)

export default UserApp;