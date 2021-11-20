export const orientationChange = (screenInfo) =>{
    return (dispatch) => {
        dispatch({
            type : "orientation",
            payload : screenInfo
        })
    }
}
