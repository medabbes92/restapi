import React from 'react'
import { deletUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

const UserCard = ({el}) => {
    const dispatch = useDispatch();
  return (
    <div style ={{margin : "50px" , border : "solid clack 3px"}}>
      <h3>{el.fullname}</h3>
      <p>{el.email}</p>
      <p>{el.phone}</p>
      <button onClick={()=> dispatch(deletUser(el._id))}>Delete</button>
      
    </div>
  ) ;
} ;

export default UserCard;