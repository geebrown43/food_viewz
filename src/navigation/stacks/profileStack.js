import React from "react"
import {View, TouchableOpacity, Image} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import {createStackNavigator} from "react-navigation"
import Profile from "../../screens/Profile"

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions:{
            header: props => (
                <View style={{top: 0, backgroundColor:"#5F1FD6", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:20, paddingBottom: 10}}>
                    <TouchableOpacity style={{marginLeft: 5}}>
                    <Icon name="menu" size={30} color="white"/>
                    </TouchableOpacity>
                    <Image source={require("../../../ios/assets/Icon_hammburger.png")} style={{width: 40, height: 40}}/>
                    <TouchableOpacity style={{marginRight: 5}}>
                    <Icon name="mail-outline" size={30} color="white"/>
                    </TouchableOpacity>
                </View>
            )
        }
    } 
}, 
{
    initialRouteName: "Profile"
})

export default ProfileStack