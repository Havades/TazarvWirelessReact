import { Dimensions } from "react-native";

const metrics = () => {
    const {width , height} = Dimensions.get('window') // or 'screen'
    return {
        screenWidth : width < height ? width : height,
        screenHeight : width < height ? height :width
    } 
} 
export default metrics;