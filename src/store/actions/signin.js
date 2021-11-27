export const signIn = (userId) =>{
    return (dispatch) => {
        dispatch({
            type : "login",
            payload : userId
        })
    }
}

export const signOut = () =>{
    return (dispatch) => {
        dispatch({
            type : "logout",
            payload : null
        })
    }
}
