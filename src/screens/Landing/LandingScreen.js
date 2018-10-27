import React, {Component} from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native"

const {width, height} = Dimensions.get("screen")
export default class LandingScreen extends Component {
    render(){
        const {navigateLogin, navigateSignup} = this.props
        return(
            <View style={styles.container}>
            <Text style={[styles.title, {textAlign:"center"}]}>Food Viewz</Text>
                <Image source={require("../../../ios/assets/Icon_hammburger.png")} style={styles.image}/>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={navigateSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Sign-up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity onPress={navigateLogin}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5F1FD6",
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        width: width / 1.7,
        height: width / 1.7
    },
    line: {
        backgroundColor: "white",
        width: width,
        height: 4
    },
    button: {
        backgroundColor: "white",
        borderRadius: 4,
        width: width / 1.5,
        height: height / 16,
        alignItems: "center",
        justifyContent:"center",
        margin: 10
    },
    buttonText: {
        fontFamily: "HelveticaNeue-CondensedBold",
        fontSize: 24,
        color: "#5F1FD6"
    },
    buttonContainer: {
        alignItems: "center"
    },
    title:{
        fontFamily:"HelveticaNeue-CondensedBold",
        fontSize: 48,
        color:"white"
    }
})