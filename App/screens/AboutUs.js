import React from 'react';

import{
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated,
    Modal,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import {
    COLORS,
    SIZES,
    icons,
    images,dummyData, FONTS
} from '../constants';


const AboutUs =()=>{

  
    function renderHeander(){
        return(
            <View
                  style={{backgroundColor:COLORS.primary,bottom:40, marginBottom:20,height:350}}
            >
            <ImageBackground
                source={images.donate_logo}
                resizeMode="cotain"
                
                style={{
                    height:340,
                    width:'100%',
                    alignSelf:'center',
                    borderRadius:SIZES.radius2,
                }}
                >
                 
    
                    {/* Name & Container */}
    
                    <View
                    style={{
                        position:'absolute',
                        bottom:-SIZES.padding,
                        left:15,
                        right:25,
                        flexDirection:'row',
                        justifyContent:'space-between'
    
                    }}
                    >
                        {/*Name*/}
                        <View
                        style={{
                            height:50,
                            width:200,
                            backgroundColor:COLORS.gray3, 
                            borderRadius:SIZES.radius,
                            justifyContent:'center',
                            alignItems:'center',
                            borderWidth:1,
                            borderColor:COLORS.lightGray1
                        }}
                        >
                            <Text
                        style={{
                            fontSize:20,
                            color:COLORS.black,
                            fontWeight:'bold',
                            textAlign:'center'
                        }}
                        >Donate Foundation</Text>
    
                        </View>
                    </View>
                </ImageBackground>    
            </View>

        )
    }


    function renderDetails(){
        return(
            <View   
            >
                {/*Who we are*/}
                 <View style={{
                    marginTop:SIZES.padding2,
                    paddingLeft:20
                 }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight:'bold',
                        color:COLORS.black
                    }}>Who We Are</Text>
                    <Text style={{
                        ...FONTS.body3,
                        color:COLORS.gray2,
                        paddingLeft:SIZES.base,
                        
                    }}
                       numberOfLines={8}
                    >
                        Donate Foundation is established in December 2020 in response to the 
                        hunger and poverty of society. Donate Foundation assist the 
                        donators who would like to donate for the needed people who is facing 
                        diffuclties in living.
                    </Text>
                 </View>
                 {/*What we do*/}
                 <View style={{
                    marginTop:SIZES.base,
                    paddingLeft:20
                 }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight:'bold',
                        color:COLORS.black
                    }}>What We Do</Text>
                    <Text style={{
                        ...FONTS.body3,
                        color:COLORS.gray2,
                        paddingLeft:SIZES.base,  
                    }}
                       numberOfLines={8}
                    >
                         Missing Children South Africa was established in March 2007 in response to 
                         the kidnapping and brutal murders of Sheldean Human (7),in an effort to 
                         assist and support families finding themselves in similar desperate situations.
                    </Text>
                 </View>

                 {/*our vision*/}
                 <View style={{
                    marginTop:SIZES.base,
                    paddingLeft:20
                 }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight:'bold',
                        color:COLORS.black
                    }}>Our Vision</Text>
                    <Text style={{
                        ...FONTS.body3,
                        color:COLORS.gray2,
                        paddingLeft:SIZES.base,  
                    }}
                       numberOfLines={8}
                    >
                     To create a community that is free of hunger and food insecurity.                    
                    </Text>
                 </View>
                   {/*our mission*/}
                 <View style={{
                    marginTop:SIZES.base,
                    paddingLeft:20
                 }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight:'bold',
                        color:COLORS.black
                    }}>Our Mission</Text>
                    <Text style={{
                        ...FONTS.body3,
                        color:COLORS.gray2,
                        paddingLeft:SIZES.base,  
                    }}
                       numberOfLines={8}
                    >
                       eliminate hunger and improve the health 
                       and well-being of our community through access to 
                       healthy and nutritious foods, community education and advocacy.
                    
                    </Text>
                 </View>
            </View>
        )
    }

    function renderFooter(){
        return(
             <View style={{
                    backgroundColor:COLORS.white,
                    height:105
                 }}>

                 </View>
        )
    }


    return(
        <SafeAreaView style={style.container}>
            {/*render Header*/}
            {renderHeander()}
            
            <ScrollView
               scrollEnabled={true}
               showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop:-40,
                 paddingBottom:3
            }}>
            {/*render Details*/}
            {renderDetails()}
            
        </ScrollView>
        {/*renderFooter*/}
        {renderFooter()}
        </SafeAreaView>
    )
}




const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.gray3
    }
})



export default AboutUs;