import React, {Component} from "react"
import SignupScreen from "./SignupScreen"

class Signup extends Component {

    navigateLogin = () => {
        const{navigation} = this.props
        navigation.navigate("Login")
    }
    render(){
        return(
            <SignupScreen navigateLogin={this.navigateLogin}/>
        )
    }
}

export default Signup