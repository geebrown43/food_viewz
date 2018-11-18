import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  CameraRoll,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RNCamera } from "react-native-camera";
import data from "./data";

const { width, height } = Dimensions.get("screen");
export default class ProfileScreen extends Component {
  state = {
    cameraView: false,
    uri:""
  };
  renderItem = item => {
    return <View style={styles.bar} />;
  };
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.saveToCameraRoll(data.uri, "photo");
      this.setState({uri:data.uri})
    }
    this.setState({ cameraView: false });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.cameraView ? (
          <View style={{ flex: 1 }}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.front}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={"Permission to use camera"}
              permissionDialogMessage={
                "We need your permission to use your camera phone"
              }
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
              }}
            />
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style={styles.capture}
              >
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => this.setState({ cameraView: true })}
                  style={{
                    height: 150,
                    width: 150,
                    backgroundColor: "white",
                    borderRadius: 75,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                 {this.state.uri ? <Image source={{uri:`${this.state.uri}`}} style={{flex: 1}} resizeMode="contain"/> : <Icon name="person" size={125} color="#5F1FD6" />} 
                </TouchableOpacity>
                <Text style={styles.name}>Mary Jane</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.bio}>
                  Bio: Traveling foodie, message me let's
                </Text>
                <Text style={styles.bio}>link up for some good food.</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <FlatList
                data={data}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  bar: {
    height: height / 6,
    width: width,
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  name: {
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 38,
    color: "grey"
  },
  bio: {
    fontFamily: "HelveticaNeue-Light",
    fontSize: 18,
    color: "grey"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});
