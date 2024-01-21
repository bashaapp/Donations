import React,{useEffect,useState} from "react";
import{
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import{
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer'

import{
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";



const DrawerContent =(props)=>{
  
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null);


  useEffect(()=>{

   
  },[])
  
  const handleSignOut = ()=>{
    auth
    
  }


    return(
        <DrawerContentScrollView {...props}
               scrollEnabled={true}
               contentContainerStyle={{
                backgroundColor:COLORS.primary,
                flex:1,
               }}
        >

            <View style={{
                flex:1,
                paddingHorizontal:SIZES.radius,
                backgroundColor:COLORS.primary
            }}>

                {/*user info*/}
                <TouchableWithoutFeedback
                   //  onPress={()=>navigation.navigate("Edit")}
                    style={{
                        flexDirection:'row',
                        marginTop:SIZES.radius3,
                        alignItems:'center',
                    }}
                >
                <Image 
                   source={images.slide_1}
                  style={{
                      height:80,
                      width:80,
                      borderRadius:100,
                      borderWidth:1,
                      borderColor:COLORS.gray3,
                 }}
             />
                    <View style={{
                          marginLeft:SIZES.radius,
                    }}>

                        <Text
                           style={{
                            color:COLORS.white,
                            ...FONTS.h2,
                            fontWeight:'600',
                            fontSize:16,
                           }}
                        >Saleh Ali</Text>

                        <Text
                            style={{
                                color:COLORS.gray,
                                ...FONTS.h3
                            }}
                        >saleh@gmail.com</Text>

                    </View>
                </TouchableWithoutFeedback>

                {/*Drawer items*/}
                <Drawer.Section style={{marginTop:20,}}>
                    <DrawerItem 
                      label='Home'
                      style={{
                        marginBottom:10
                      }}
                      labelStyle={{
                        color:COLORS.gray3,
                        fontSize:SIZES.h3
                      }}
                      icon={({})=>(
                        <Image 
                           source={icons.home}
                           style={{
                            width:25,
                            height:25,
                            tintColor:COLORS.orange
                           }}
                        />
                      )}
                      onPress={()=>navigation.navigate('Home')}
                    />

                    <DrawerItem 
                      label='Wallet'
                      style={{
                        marginBottom:10
                      }}
                      labelStyle={{
                        color:COLORS.gray3,
                        fontSize:SIZES.h3
                      }}
                      icon={({})=>(
                        <Image 
                           source={icons.wallet}
                           style={{
                            width:25,
                            height:25,
                            tintColor:COLORS.orange
                           }}
                        />
                      )}
                    />
                 <DrawerItem 
                      label='Setting'
                      style={{
                        marginBottom:10
                      }}
                      labelStyle={{
                        color:COLORS.gray3,
                        fontSize:SIZES.h3
                      }}
                      icon={({})=>(
                        <Image 
                           source={icons.setting}
                           style={{
                            width:25,
                            height:25,
                            tintColor:COLORS.orange
                           }}
                        />
                      )}
                    />  
                 <DrawerItem 
                      label='About us'
                      style={{
                        marginBottom:10
                      }}
                      labelStyle={{
                        color:COLORS.gray3,
                        fontSize:SIZES.h3
                      }}
                      icon={({})=>(
                        <Image 
                           source={icons.help}
                           style={{
                            width:30,
                            height:30,
                            tintColor:COLORS.orange
                           }}
                        />
                      )}
                      onPress={()=>navigation.navigate('AboutUs')}
                    />      

                </Drawer.Section>

             <Drawer.Section
                  showDivider={false}
                  style={{
                    bottom:-180,
                    //backgroundColor:COLORS.primary,
                  }}
             >

             <DrawerItem 
                   style={{
                   // top:280
                   }}
                      label='Logout'
                      labelStyle={{
                        color:COLORS.gray3,
                        fontSize:SIZES.h3
                      }}
                      icon={({})=>(
                        <Image 
                           source={icons.logout}
                           style={{
                            width:25,
                            height:25,
                            tintColor:COLORS.orange
                           }}
                        />
                      )}

                      onPress={handleSignOut}
                    />      

             </Drawer.Section>

            </View>
        </DrawerContentScrollView>
    )
}


export default DrawerContent;