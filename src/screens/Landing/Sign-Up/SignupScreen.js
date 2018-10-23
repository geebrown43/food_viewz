import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default class SignupScreen extends Component {
  render() {
      const {navigateLogin} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../../../ios/assets/Icon_hammburger.png")}
            style={styles.image}
          />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#D8D8D8"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#D8D8D8"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#D8D8D8"
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign-up</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line}>
            <View style={styles.leftLine} />
            <Text style={styles.fineText}>or</Text>
            <View style={styles.rightLine} />
          </View>
          <TouchableOpacity>
            <View style={styles.button2}>
              <Text style={styles.buttonText2}>Signup with Facebook</Text>
            </View>
          </TouchableOpacity>
          <View style={{alignItems: "center"}}>
            <Text style={styles.fineText}>
              By signing up, you agree to FoodViewz
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Text style={styles.boldText}>Terms & Conditions </Text>
              </TouchableOpacity>
              <Text style={styles.fineText}>and</Text>
              <TouchableOpacity>
                <Text style={styles.boldText}> Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.fineText}>Already have an account ?</Text>
          <TouchableOpacity onPress={navigateLogin}>
            <Text style={styles.boldText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    width: width / 4,
    height: width / 4
  },
  inputContainer: {
    width: width / 1.1,
    height: height / 4,
    backgroundColor: "white",
    borderRadius: 4,
    margin: 10
  },
  topContainer: {
    alignItems: "center"
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8",
    flex: 1,
    fontSize: 18,
    fontFamily: "HelveticaNeue-Thin",
    paddingLeft: 15
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
  button2: {
    backgroundColor: "white",
    borderRadius: 4,
    width: width / 1.7,
    height: height / 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "HelveticaNeue-CondensedBold",
    color: "#5F1FD6"
  },
  buttonText2: {
    fontSize: 18,
    fontFamily: "HelveticaNeue-CondensedBold",
    color: "#5F1FD6"
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: width
  },
  leftLine: {
    backgroundColor: "white",
    width: width / 2.4,
    height: 3
  },
  rightLine: {
    backgroundColor: "white",
    width: width / 2.4,
    height: 3
  },
  bottomText: {
    flexDirection: "row"
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
  }
});
