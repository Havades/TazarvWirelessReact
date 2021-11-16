const initialState = {
    isLoggedIn : false ,
    userId : -1
}
const loginReducer = (state = initialState , action) => {
    switch(action.type){
        case "login" :
            return {...state ,
                isLoggedIn : true,
                userId : action.payload
             }; 
        case "logout" :
            return {...state ,
                isLoggedIn : false,
                userId : -1
             };
            return state;
        default:
            return state;
    }
}

export default loginReducer;