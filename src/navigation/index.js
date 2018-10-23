// @flow

import React , {Component} from "react"
import {View} from "react-native"
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation"
import HomeStack from "./stacks/homeStack"
import DiscoverStack from "./stacks/discoverStack"
import CameraStack from "./stacks/cameraStack"
import ProfileStack from "./stacks/profileStack"
import NotificationStack from "./stacks/notificationStack"
import LandingStack from "./stacks/landingStack"

const HomeTabNav = createBottomTabNavigator({
    Home:HomeStack
}, 
{
    initialRouteName: "Home",
    mode: "Card"
})

const DiscoverTabNav = createBottomTabNavigator({
    Discover:DiscoverStack
}, 
{
    initialRouteName: "Discover",
    mode: "Card"
})

const CameraTabNav = createBottomTabNavigator({
    Camera:CameraStack
}, 
{
    initialRouteName: "Camera",
    mode: "Card"
})

const ProfileTabNav = createBottomTabNavigator({
    Profile:ProfileStack
},
{
    initialRouteName: "Profile",
    mode: "Card"
})

const NotificationTabNav = createBottomTabNavigator({
    Notification:NotificationStack
}, 
{
    initialRouteName: "Notification",
    mode: "Card"
})

const NavContainer = createSwitchNavigator({
    Landing: LandingStack,
    Home: HomeTabNav 
},
{
    initialRouteName: "Landing"

})

export default () => (<NavContainer/>)
