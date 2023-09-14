import React, {useState} from "react" ; 
import {useDispatch } from "react-redux" ; 
import {addUser } from "../redux/actions" ; 
const AddUser =() => {
const [fullname , setFullname] = useState("");
const [email , setEmail] = useState("");
const [phone , setPhone] = useState("");
const dispatch = useDispatch() ; 

const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        fullname , 
        email , 
        phone , 

    } ;
    dispatch(addUser(newUser)) ;
};

return(
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor=""> phullname :</label>
                <input
                type ="text"
                value = {fullname}
                onChange={(e)=> setFullname(e.target.value)}
                
                />

            </div>
            <div>
                <label htmlFor=""> email </label>
                <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input
                type="text"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <button type="submit">ADD USER</button>
        </form>
    </div>
);
}
export default AddUser


