import React, {Component} from "react"
import LandingScreen from "./LandingScreen"


class Landing extends Component {

    navigateLogin = () => {
        const {navigation} = this.props
        navigation.navigate("Login")
    }

    navigateSignup = () => {
        const {navigation} = this.props
        navigation.navigate("Signup")
    }
    
    render(){
        console.log("What are the props", this.props)
        return (
            <LandingScreen
                navigateLogin={this.navigateLogin}
                navigateSignup={this.navigateSignup}
            />
        )
    }
}

export default Landing