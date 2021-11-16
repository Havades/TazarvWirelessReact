
const initialState = {
    mediaId : -1 ,
    playState : 0
}
const playingReducer = (state = initialState , action) => {
    switch(action.type){
        case "play" :
            return {...state ,
                mediaId : action.payload,
                playState : 1 
            }
        case "pause" :
            return {...state ,
                mediaId : action.payload,
                playState : 2 
            }
        default:
            return state;
    }
}
/* PlayState = {
    Notloaded : 0 ,
    Play : 1 ,
    Pause : 2 ,
}*/
export default playingReducer;