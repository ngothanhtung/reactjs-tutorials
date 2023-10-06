/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync, getUsersAsync, selectUser } from '../actions';

function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return (
    <div>
      {loading && <div>Loading ...</div>}
      <h1>Users</h1>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => {
                    dispatch(selectUser(item));
                  }}
                >
                  Select
                </button>
              </td>
              <td>{item._id}</td>
              <td>{item.username}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteUserAsync(item._id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default Users;
