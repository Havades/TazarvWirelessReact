const initialState = {
    width : 0,
    height : 0 ,
    isTablet : false,
    isLandscape : false
}
const screenReducer = (state = initialState , action) => {
    const data = action.payload;
    switch(action.type){
        case "screenSize" :
            return {...state ,
                width : data.width ,
                height : data.height ,
                isTablet : data.isTablet,
                isLandscape : data.isLandscape
            }
        default:
            return state;
    }
}
export default screenReducer;