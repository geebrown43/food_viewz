import React, { Component } from "react";
import firebase from "react-native-firebase";
import LoginScreen from "./LoginScreen";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  navigate = screen => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };
  login = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  };
  render() {
    return <LoginScreen navigate={this.navigate} login={this.login} onChangeText={this.setState.bind(this)} {...this.state}/>;
  }
}

export default Login;
