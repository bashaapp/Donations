import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {AdminPanel,DonationList,FeedBack,MessagesList,EditProfile, DonateDetails, UserList, UserProfileDetails, Account} from "../screens";



const Stack = createStackNavigator();


const AdminNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{presentation:'transparentModal'}}> 
        <>
           <Stack.Screen   options={{headerShown:false,}}  name="Admin" component={AdminPanel} />
           <Stack.Screen   options={{headerBackTitleVisible:false}}  name="Messages" component={MessagesList} />
           <Stack.Screen   options={{headerBackTitleVisible:false, }}  name="Forms" component={DonationList} />
           <Stack.Screen   options={{headerBackTitleVisible:false, }}  name="UsersList" component={UserList} />
           <Stack.Screen   options={{headerBackTitleVisible:false}}  name="Feedback" component={FeedBack} />
           <Stack.Screen   options={{headerShown:false,}}  name ='Edi' component={EditProfile} />
           <Stack.Screen  name ='Donate Details' options={{headerBackTitleVisible:false}}    component={DonateDetails} />
           <Stack.Screen  name ='User Profile Details' options={{headerBackTitleVisible:false}}    component={UserProfileDetails} />
           <Stack.Screen  name="AdminAccount"  options={{  headerShown:false,}}  component={Account} />
           <Stack.Screen  options={{headerShown:false,}}  name ='Donation'  component={DonationList} />
        </>
        </Stack.Navigator>
    )
}



export default AdminNavigator;