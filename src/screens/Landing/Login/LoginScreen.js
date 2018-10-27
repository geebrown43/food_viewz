import React, {Component} from "react"
import {View, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions, Text} from "react-native"

const {width, height} = Dimensions.get("screen")
export default class LoginScreen extends Component {
    render(){
        const {navigate} = this.props
        return(
            <View style={styles.container}>
                <Image source={require("../../../../ios/assets/Icon_hammburger.png")} style={styles.image}/>
                <View style={styles.topContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} />
                        <TextInput style={styles.textInput} />
                    </View>
                    <TouchableOpacity onPress={() => navigate("Home")}>
                    <View style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                    </View>
                    </TouchableOpacity>    
                </View>
                <View>
                    <View style={styles.line} />
                    <View style={{flexDirection: "row", justifyContent:"center", marginTop: 20}}>
                    <Text style={styles.fineText}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => this.navigate("Signup")}>
                        <Text style={styles.boldText}> Signup</Text>
                    </TouchableOpacity>
                    </View>
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
        width: width / 2.2,
        height: width / 2.2
    },
    inputContainer: {
        width: width / 1.15,
    height: height / 5,
    backgroundColor: "white",
    borderRadius: 4,
    margin: 5
    },
    button: {
        backgroundColor: "white",
        borderRadius: 4,
        width: width / 1.3,
        height: height / 16,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
      },
      topContainer: {
        alignItems: "center"
      },
      line: {
        backgroundColor: "white",
        width: width ,
        height: 3
      },
      buttonText: {
        fontSize: 24,
        fontFamily: "HelveticaNeue-CondensedBold",
        color: "#5F1FD6"
      },
      fineText: {
        color: "white",
        fontFamily: "HelveticaNeue-Light",
        fontSize: 14
      },
      boldText: {
        color: "white",
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 14
      },
      textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#D8D8D8",
        flex: 1,
        fontSize: 18,
        fontFamily: "HelveticaNeue-Thin",
        paddingLeft: 15
      },
})