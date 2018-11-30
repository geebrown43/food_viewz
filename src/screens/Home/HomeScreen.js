import React, {Component} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from "react-native"
import data from "./data"



const {width, height} = Dimensions.get("screen")
export default class HomeScreen extends Component {

    renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                <View style={styles.tile}>
                    <View style={{flex: 1, flexDirection:"row", justifyContent:"space-around",
        alignItems:"center"}}>
                        <View style={styles.circle}/>
                        <View>
                            <View style={styles.box}/>
                            <View style={styles.box2}/>
                        </View>
                    </View>
                    <View style={{flex: .7, marginRight: 5}}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.city}>{item.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    keyExtractor = (index) => index.toString()

    render(){
        return(
            <View style={styles.container}>
                
               <FlatList data={data} renderItem={this.renderItem} showsVerticalScrollIndicator={false} keyExtractor={this.keyExtractor}/>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems:"center"
    },
    tile:{
        width: width / 1.1,
        height: height / 9,
        backgroundColor:"white",
        margin: 8,
        shadowColor:"grey",
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: .5,
        borderRadius: 4,
        flexDirection:"row",
        alignItems:"center"
    },
    name:{
        fontFamily:"HelveticaNeue-CondensedBold",
        fontSize: 18,
        color:"#9B9B9B",
        textAlign:"right"
    },
    city:{
        fontFamily:"HelveticaNeue-Light",
        fontSize: 14,
        color:"#9B9B9B",
        textAlign:"right"
    },
    circle:{
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor:"#D8D8D8"
    },
    box:{
        width: width / 3.5,
        height: 15,
        backgroundColor: "#D8D8D8",
        margin: 2,
        
    },
    box2:{
        width: width / 2.8,
        height: 15,
        backgroundColor: "#D8D8D8",
        margin: 2
    }
})