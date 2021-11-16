export const playMedia = (mediaId) =>{
    return (dispatch) => {
        dispatch({
            type : "play",
            payload : mediaId
        })
    }
}

export const pauseMedia = (mediaId) =>{
    return (dispatch) => {
        dispatch({
            type : "pause",
            payload : mediaId
        })
    }
}
