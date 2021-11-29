export const screenSizeChange = (screenInfo) =>{
    return (dispatch) => {
        dispatch({
            type : "screenSize",
            payload : screenInfo
        })
    }
}