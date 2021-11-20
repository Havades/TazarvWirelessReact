import { Dimensions } from "react-native"

const initialState = {
    width : 0,
    height : 0 ,
    isPortrait : true
}
const screenReducer = (state = initialState , action) => {
    switch(action.type){
        case "orientation" :
            return {...state ,
                width : action.payload.width ,
                height : action.payload.height ,
                isPortrait : action.payload.isPortrait
            }
        default:
            return state;
    }
}
export default screenReducer;