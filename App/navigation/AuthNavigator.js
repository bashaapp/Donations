import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ForgetPassword, SignIn, SignUp, Splash } from "../screens";



const Stack = createStackNavigator();


const AuthNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen  name = 'Splash' component={Splash} />
            <Stack.Screen name = 'SignIn' component={SignIn}/>
            <Stack.Screen  name = 'SignUp'  component={SignUp} />
            <Stack.Screen  name = 'ForgetPassword' component={ForgetPassword} />

            
        </Stack.Navigator>
    )
}


export default AuthNavigator;