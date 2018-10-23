import React, {Component} from "react"
import LoginScreen from "./LoginScreen"

class Login extends Component {
    navigateSignup = () => {
        const {navigation} = this.props
        navigation.navigate("Signup")
    }
    render(){

        return(
            <LoginScreen navigateSignup={this.navigateSignup}/>
        )
    }
}

export default Login