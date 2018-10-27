import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import data from "./data"

const {width, height} = Dimensions.get("screen")
export default class ProfileScreen extends Component {

    renderItem = (item) => {
        return (
            <View style={styles.bar}>

            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent:"space-around"}}>
                <View style={{alignItems:"center"}}>
                    <View style={{height: 150, width:  150, backgroundColor:"white", borderRadius: 75, alignItems:"center", justifyContent:"center"}}>
                        <Icon name="person" size={125} color="#5F1FD6"/>
                    </View>
                    <Text style={styles.name}>Mary Jane</Text>
                </View>
                <View style={{alignItems:"center", justifyContent:"center"}}>
                <Text style={styles.bio}>Bio: Traveling foodie, message me let's</Text>
                <Text style={styles.bio}>link up for some good food.</Text>
                </View>
                </View>
                <View style={{flex: 1, alignItems:"center"}}>
                    <FlatList data={data}  renderItem={this.renderItem} showsVerticalScrollIndicator={false}/>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightgray"
    },
    bar: {
        height: height / 6,
        width:width,
        backgroundColor:"white",
        borderBottomColor:"grey",
        borderBottomWidth: 1,
    },
    name:{
        fontFamily:"HelveticaNeue-CondensedBold",
        fontSize: 38,
        color:"grey"
    },
    bio:{
        fontFamily:"HelveticaNeue-Light",
        fontSize: 18,
        color:"grey"
    }
})