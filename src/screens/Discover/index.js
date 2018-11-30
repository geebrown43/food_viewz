import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
          initialRegion={{
            latitude: 39.739235,
            longitude: -104.990250,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <View style={styles.bottom}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text>BK</Text>
            <View>
                <Text>Burger King</Text>
                <Text>10112 S. Chambers Way</Text>
                <Text>Denver, CO 80012</Text>
                <Text>BK.com</Text>
            </View>
            <TouchableOpacity>
                <View>
                    <Text>Check-In</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex: 2
  },
  bottom:{
      flex: 1,
      
  }
});
