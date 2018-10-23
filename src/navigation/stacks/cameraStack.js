import React from "react"
import {createStackNavigator} from "react-navigation"
import Camera from "../../screens/Camera"

const CameraStack = createStackNavigator({
    Camera: {
        screen: Camera,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Camera"
})

export default CameraStack