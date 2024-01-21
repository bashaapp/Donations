import React from "react";
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {COLORS,icons,SIZES} from '../constants';
import{
    DonationList,
    MessagesList,
    AdminPanel,
    AdminProfile,
    FeedBack,
    Account,
    EditProfile,
} from '../screens'



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()





const CustomTabButton =({children,onPress})=>{
  const [selected,setSelected] = React.useState(null)
  return(
  <TouchableOpacity
      style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        ...style.shadow
      }}
      onPress={onPress}
  >

    <View
       style={{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:COLORS.primary,
        backgroundColor:selected === null? COLORS.gray3 : COLORS.primary
       }}
    >
      {children}
    </View>
  </TouchableOpacity>
)
  }


const AdminTabs = ()=>{
    return (
        <Tab.Navigator
           screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarStyle:{
              position:'absolute',
              bottom:25,
              height:80,
              left:20,
              right:20,
              elevation:0,
              borderColor:COLORS.primary,
              borderWidth:1,
              backgroundColor:COLORS.gray3,
              borderRadius:SIZES.radius,
              height:70,
              ...style.shadow
            }
           }}
        >
          <Tab.Screen
            name="AdminHomeScreen"
            component={AdminHomeScreen}
            options={{
              tabBarIcon: ({focused}) => (
               <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image 
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    marginTop:-20,
                    marginBottom:5,
                    width:23,
                    height:23,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Admin</Text>
               </View>
              ),
            }}
          />
          <Tab.Screen
            name="Forms"
            component={DonationList}
            options={{
              headerShown:true,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image 
                  source={icons.item_icon}
                  resizeMode="contain"
                  style={{
                    width:30,
                    height:30,
                    marginTop:-27,
                    marginBottom:5,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Donations</Text>
               </View>
              ),

            }}
          />

      {/*    <Tab.Screen name='Feedback' component={FeedBack}
           options={{
            tabBarIcon:({focused})=>(
              <Image
               source={icons.feedback}
               resizeMode="contain"
               style={{
                 width:23,
                 height:23,
                 tintColor:focused ? COLORS.primary : COLORS.gray
               }}

              />
            ),
            tabBarButton:(props)=>(
              <CustomTabButton {...props} />
            )
           }}
          
          />*/}

           <Tab.Screen
            name="Messages"
            component={MessagesList}
            options={{
              headerShown:true,
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image 
                  source={icons.feedback_1}
                  resizeMode="contain"
                  style={{
                    width:23,
                    height:23,
                    marginTop:-20,
                    marginBottom:5,
                    tintColor:focused ? COLORS.primary : COLORS.gray
                  }}
                />
                <Text
                   style={{
                    color:focused?COLORS.primary:COLORS.gray
                   }}
                >Messages</Text>
               </View>
              ),
            }}
          />
          <Tab.Screen
            name="AdminProfile"
            component={AdminProfile}
            options={{
            
              tabBarIcon: ({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image 
                  source={icons.profile}
                  resizeMode="contain"
                  style={{
                    width:23,
                    height:23,
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

const AdminHomeScreen=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen  name="Admin" component={AdminPanel} />
     <Stack.Screen  name="Edit"  component={EditProfile} />
     <Stack.Screen  name = 'Feedback' component={FeedBack} />
    </Stack.Navigator>
  )
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


export default AdminTabs;