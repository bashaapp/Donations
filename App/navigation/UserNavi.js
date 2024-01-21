import React from "react";
import { createDrawerNavigator} from '@react-navigation/drawer';
import {AuthNavigator, DrawerContent, Tabs } from '../navigation';
import StackNavigator from '../navigation/StackNavigator';



const Drawer = createDrawerNavigator();



const UserNavi=()=>{
    return(
        
        <Drawer.Navigator screenOptions={{
            headerShown:false
          }} drawerContent={props =><DrawerContent {...props}/>}>
             <Drawer.Screen  name ='Auth' component={AuthNavigator} />
             <Drawer.Screen name='Tabs'  component={Tabs} />
             <Drawer.Screen name='Stack'  component={StackNavigator} />
          </Drawer.Navigator>
    )
}



export default UserNavi;