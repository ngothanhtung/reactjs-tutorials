import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import Dashboard from './dashboard';
import authClient from './authClient';

import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
  <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
