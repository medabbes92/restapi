import axios from "axios"

import {ADD_USERS, GET_USERS, DELETE_USER} from "./actionTypes" ; 
export const getUsers = () => async (dispatch) => {
    try {

const res = await axios.get("/get") ; 
console.log(res) ; 
dispatch ({
    type : GET_USERS,
    payload : res.data
})

    } catch (error) { alert ("get error")}
};


export const addUser = (newUser) => async (dispatch) => {
    try {
        const {data}  = await axios.post("/add" , newUser);
        dispatch({
            type: ADD_USERS,
            payload: data,
        })
    }  catch (error) { alert ("add error");
}
}

export const deletUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/del/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: id,

        }) ;
    } catch (error) {
        alert ("delete error");
        
    }
}