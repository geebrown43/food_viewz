import React, {Component} from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native"

const {width, height} = Dimensions.get("screen")
export default class LandingScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../../../ios/assets/Icon_hammburger.png")} style={styles.image}/>
                <View>
                    <TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <Text>Sign-up</Text>
                        </View>
                    </TouchableOpacity>
                    <View />
                    <TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <Text>Login</Text>
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
        alignItems: "center"
    },
    image: {
        width: width / 1.7,
        height: width / 1.7
    },
    line: {
        color: "white",
        width: width,
        height: 4
    },
    buttonContainer: {
        backgroundColor: "white",
        borderRadius: 4,
        width: width / 1.7,
        height: height / 16
    }
})