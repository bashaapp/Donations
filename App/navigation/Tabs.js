import React from "react";
import {Image,View,Text,StyleSheet,} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {COLORS,icons,SIZES} from '../constants';
import{
    Home,
    Profile,
    Contact,
    UserInbox,
    EditProfile,
    Account,
    AdminProfile,
    AboutUs
} from '../screens'
import { createStackNavigator } from "@react-navigation/stack";




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()




{/*const CustomTabButton =({children,onPress})=>{
  const [selected,setSelected] = React.useState(null)
  return(
  <TouchableOpacity
      style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...style.shadow
      }}
      onPress={onPress}
  >

    <View
       style={{
        width:60,
        height:60,
        borderRadius:35,
        backgroundColor:selected === null? COLORS.gray : COLORS.primary
       }}
    >
      {children}
    </View>
  </TouchableOpacity>
)
  }
*/}


const Tabs = ()=>{
    return (
        <Tab.Navigator
           screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{
              position:'absolute',
              bottom:25,
              left:15,
              right:15,
              elevation:0,
              borderColor:COLORS.orange,
              borderWidth:3,
              backgroundColor:COLORS.gray3,
              borderRadius:SIZES.radius,
              height:70,
              ...style.shadow
            }
           }}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeStack}
            options={{
              tabBarIcon: ({focused}) => (
               <View style={{alignItems:'center', justifyContent:'center', top:10, width:40}}>
                 <Image 
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    marginTop:-20,
                    marginBottom:5,
                    width:25,
                    height:25,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Home</Text>
               </View>
              ),
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={UserInbox}
            options={{
            
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10,width:40}}>
                 <Image 
                  source={icons.inbox}
                  resizeMode="contain"
                  style={{
                    width:25,
                    height:25,
                    marginTop:-20,
                    marginBottom:5,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Inbox</Text>
               </View>
              ),

            }}
          />

           <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
            
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10,width:52}}>
                 <Image 
                  source={icons.contact}
                  resizeMode="contain"
                  style={{
                    width:25,
                    height:25,
                    marginTop:-20,
                    marginBottom:5,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Contact</Text>
               </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
            
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10,width:45}}>
                 <Image 
                  source={icons.profile}
                  resizeMode="contain"
                  style={{
                    width:25,
                    height:25,
                    marginTop:-20,
                    marginBottom:5,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Profile</Text>
               </View>
              ),
            }}
          />
        </Tab.Navigator>
      );
}


const style= StyleSheet.create({
  shadow:{
    shadowColor:COLORS.primary,
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})

const HomeStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen  name="Home" component={Home} />
     <Stack.Screen  name="Edit"  component={EditProfile} />
     <Stack.Screen  name="AboutUs" component={AboutUs} />
       </Stack.Navigator>
  )
}


export default Tabs;