import React from 'react';
import { getUsers } from '../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import { selectLoading, selectUsers } from '../selectors/userSelectors'; // Importez les sélecteurs

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  },[] );

  // Utilisez les sélecteurs spécifiques
  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          {users.map((el) => (
            <UserCard key={el._id}  el={el}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
