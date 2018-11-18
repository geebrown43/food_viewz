import React from "react"
import {View, Image, TouchableOpacity} from "react-native"
import {createStackNavigator} from "react-navigation"
import Icon from "react-native-vector-icons/MaterialIcons"
import Discover from "../../screens/Discover"

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Discover,
        navigationOptions:{
            header: props => (
                <View style={{top: 0, backgroundColor:"#5F1FD6", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:20, paddingBottom: 10}}>
                    <TouchableOpacity style={{marginLeft: 5}} onPress={() => props.navigation.openDrawer()}>
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
    initialRouteName: "Discover"
})

export default DiscoverStack    