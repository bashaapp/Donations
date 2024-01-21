import React from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native';
import{
    COLORS,
    SIZES,
    images,
    icons,
    FONTS,
} from '../../constants';
import * as Animatable from 'react-native-animatable';
import {AppButton} from '../../components';

const Splash = ({navigation})=>{



    const renderHeader=()=>{
        return(
            <View style={{
                marginTop:SIZES.padding,
                alignItems:'center'
            }}>
                <Image 
                  source={images.donate_logo}
                  resizeMode='contain'
                  style={{
                    width:'100%',
                    height:'80%',
                  }}
                  
                />

                <Animatable.Text animation='fadeInDown' duration={2000} style={{
                    marginTop:-100,
                    fontSize:25,
                    color:COLORS.gray3,
                    fontWeight:'400',
                    textAlign:'center'

                }}>
                    Can Make a Big Difference..!
                </Animatable.Text> 
            </View>
        )
    }


    const renderFooter=()=>{
        return(
            <View style={{
                marginTop:SIZES.padding2,
                alignItems:'center',

            }}>

                <AppButton 
                    label="Let's Started"
                    buttonStyle={{
                        height:50,
                        width:'80%',
                       
                        backgroundColor:COLORS.gray3,
                        borderRadius:SIZES.radius,
                    }}
                    labelStyle={{
                        color:COLORS.primary,
                        fontWeight:'700',
                        alignSelf:'center',
                        left:30
                    }}

                    onPress={()=>navigation.navigate('SignIn')}
                />

            </View>
        )
    }
    return(
       <SafeAreaView
         style={{
            flex:1,
            backgroundColor:COLORS.primary,
         }}
       >

        {/*logo*/}
        {renderHeader()}

        {/*renderFooter*/}
        {renderFooter()}

       </SafeAreaView>
    )
}

export default Splash;