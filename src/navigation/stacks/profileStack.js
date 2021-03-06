import React from "react"
import {createStackNavigator} from "react-navigation"
import Profile from "../../screens/Profile"

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions:{
            header: null
        }
    } 
}, 
{
    initialRouteName: "Profile"
})

export default ProfileStack