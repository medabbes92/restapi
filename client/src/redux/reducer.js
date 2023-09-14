const { GET_USERS, ADD_USERS, DELETE_USERS} = require ("./actionTypes")

const init ={
    loading : true , 
    users : null ,
} ; 
const reducer = (state = init , { type , payload}) => {
    switch (type) {
        case GET_USERS : 
        return {...state, users : payload , loading: false} ; 

        case ADD_USERS : 
        return {...state, users : [...state.users , payload]} ; 

        case DELETE_USERS : 
        return {...state, users : state.users.filter((el)=>el._id !== payload)} ; 

        default :
        return state ;
    }
} ; 
export default reducer 