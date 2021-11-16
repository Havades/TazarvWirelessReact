const initialState = {
    isLoggedIn : false ,
    userId : -1
}
const loginReducer = (state = initialState , action) => {
    switch(action.type){
        case "login" :
            state.isLoggedIn = true
            state.userId = action.payload
            return state; 
        case "logout" :
            state = initialState
            return state;
        default:
            return state;
    }
}

export default loginReducer;