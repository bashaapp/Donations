import React from "react";
import {AdminTabs, AuthNavigator,} from '../navigation';
import { createStackNavigator } from "@react-navigation/stack";
import AdminNavigator from "./AdminStack";



const Stack = createStackNavigator();

const AdminNavi=()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
          
             <Stack.Screen  name ='AdminTabs' component={AdminTabs} />
             <Stack.Screen  name ='AdminStack' component={AdminNavigator} />

             
          </Stack.Navigator>
    )
}



export default AdminNavi;