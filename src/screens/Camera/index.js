import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>FOOD VIEWZ</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    }
})