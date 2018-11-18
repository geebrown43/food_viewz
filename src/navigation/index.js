// @flow

import React , {Component} from "react"
import {View, TouchableOpacity} from "react-native"
import {createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator} from "react-navigation"
import Icon from "react-native-vector-icons/MaterialIcons"
import HomeStack from "./stacks/homeStack"
import DiscoverStack from "./stacks/discoverStack"
import CameraStack from "./stacks/cameraStack"
import ProfileStack from "./stacks/profileStack"
import NotificationStack from "./stacks/notificationStack"
import LandingStack from "./stacks/landingStack"


const CustomTabBar = (props) => {
    const tabs = [
        {name: "Home", icon:"home"},
        {name: "Discover", icon:"search"},
        {name: "Camera", icon:"photo-camera"},
        {name: "Profile", icon:"person"},
        {name: "Notifications", icon:"notifications"},
    ]

    return (
        <View>
            <View style={{flexDirection:"row", justifyContent:"space-between", padding: 10, backgroundColor:"#5F1FD6"}}>
                {tabs.map((tab, tabIdx) => {
                    switch (tab.routeName) {
                        case "":
                            return(
                                <View />
                            )
                            break;
                    
                        default:
                            return (
                                <TouchableOpacity onPress={() => props.navigation.navigate(tab.name)}>
                                    <View style={{justifyContent:"center", alignItems:"center", marginTop: 3}}>
                                        <Icon name={tab.icon} size={30} color="white" />
                                    </View>
                                </TouchableOpacity>
                            )
                            break;
                    }
                })}
            </View>
        </View>
    )
}





const HomeTabNav = createBottomTabNavigator({
    Home:HomeStack
}, 
{
    initialRouteName: "Home",
    mode: "Card",
    tabBarComponent: props => <CustomTabBar {...props} />
})

const DiscoverTabNav = createBottomTabNavigator({
    Discover:DiscoverStack
}, 
{
    initialRouteName: "Discover",
    mode: "Card",
    tabBarComponent: props => <CustomTabBar {...props} />
})

const CameraTabNav = createBottomTabNavigator({
    Camera:CameraStack
}, 
{
    initialRouteName: "Camera",
    mode: "Card",
    tabBarComponent: props => <CustomTabBar {...props} />
})

const ProfileTabNav = createBottomTabNavigator({
    Profile:ProfileStack
},
{
    initialRouteName: "Profile",
    mode: "Card",
    tabBarComponent: props => <CustomTabBar {...props} />
})

const NotificationTabNav = createBottomTabNavigator({
    Notification:NotificationStack
}, 
{
    initialRouteName: "Notification",
    mode: "Card",
    tabBarComponent: props => <CustomTabBar {...props} />
})

const MoreDrawer = createDrawerNavigator({
    Home: HomeStack,
    Profile:ProfileStack
})
const NavContainer = createSwitchNavigator({
    Landing: LandingStack,
    More:MoreDrawer,
    Home: HomeTabNav,
    Camera: CameraTabNav,
    Profile:ProfileTabNav,
    Discover:DiscoverTabNav,
    Notification:NotificationTabNav
},
{
    initialRouteName: "Landing"

})

export default () => (<NavContainer/>)
