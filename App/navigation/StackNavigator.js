import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {AboutUs, Account, DonateDetails, DonationList,EditProfile,Home, MessagesList, Profile,} from "../screens";
import { UploadProgress } from "../components";



const Stack = createStackNavigator();


const StackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false,  
           }}
        ><>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Donate" component={DonateDetails} />
        <Stack.Screen  name="UploadPrgress" component={UploadProgress} />
        <Stack.Screen  name="Ed"  component={EditProfile} />
        <Stack.Screen  name="AboutUs" component={AboutUs} />
        <Stack.Screen  name="Account"  options={{headerShown:false,}}  component={Account} />
        </>

        </Stack.Navigator>
    )
}



export default StackNavigator;