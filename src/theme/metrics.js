import React , { useEffect } from 'react'
import { Dimensions , View} from "react-native";
import { bindActionCreators  } from 'redux'
import { useDispatch} from 'react-redux'
import * as actionCreator from './../store/actions'
const Metrics = (props) => {

    useEffect(() => {
        const {width , height} = Dimensions.get('screen') // or 'window'
        const isPortrait = width < height
        orientationChange({
            width : width,
            height : height,
            isPortrait : width < height
        });
        return () => {}
    }, [])

    const dispatch = useDispatch()
    const {orientationChange} = bindActionCreators(actionCreator , dispatch)

    Dimensions.addEventListener('change', () => {
        const size = Dimensions.get('screen')
        const result = {
            width : size.width,
            height : size.height,
            isPortrait : size.width < size.height
        }
        orientationChange(result);
    });
    return (
        <View>
            {props.children}
        </View>
    )
}
export default Metrics;