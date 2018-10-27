import React, {Component} from "react"
import LoginScreen from "./LoginScreen"

class Login extends Component {
    navigate = (screen) => {
        const {navigation} = this.props
        navigation.navigate(screen)
    }
    render(){

        return(
            <LoginScreen navigate={this.navigate}/>
        )
    }
}

export default Login