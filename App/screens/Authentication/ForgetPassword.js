import React from "react";
import{
    View,
    Image,
    Alert
} from 'react-native'

import{
    FONTS,
    SIZES,
    COLORS,
    icons,
    images
} from '../../constants'

import { FormInput,AppButton } from "../../components";
import {utils} from '../../utils'
import { Text } from "react-native-paper";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



const ForgetPassword=()=>{

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")



    function isEnableSendEmail(){
        return email !== "" && emailError == ""
    }
 
    
       
      

      function renderHeader(){
        return(
            <View
                style={{
                    height:100,
                    marginTop:SIZES.padding2,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text
                      style={{
                        fontSize:24,
                        fontWeight:'bold'
                      }}  
                >Forget Password
                </Text>
    
                <Text
                  style={{
                     ...FONTS.body4,
                     marginTop:SIZES.base,
                     color:COLORS.gray
                  }}
                >Please Type in Your Email to reset your password</Text>
    
            </View>
        )
      }


      function renderFormInput(){
             return(
                <View style={{
                     flex:1,
                   // backgroundColor:COLORS.primary,
                    paddingHorizontal:SIZES.padding
                }}>
                        {/*Form Input*/}
                    <FormInput 
                      label='Email'
                      keyboardType='email-address'
                      autoCompleteType='email'
                      value={email}
                      onChange={(value)=>{
                          //validate email
                           utils.validateEmail(value, setEmailError)
                           setEmail(value)
                      }}
                      containerStyle={{
                        height:75,
                        width:'100%',
                       
                    }}
                    inputStyle={{
                        paddingLeft:SIZES.base,
                      
                      }}
                      errorMsg={emailError}
                      appendComponent={
                          <View
                          style={{
                              justifyContent:'center',
                              marginRight:SIZES.base
                          }}
                          >
                            <Image 
                            source={email == "" || (email != "" && 
                            emailError == "") ? icons.correct:icons.cancel}
                            style={{
                                height:20,
                                width:20,
                                tintColor:email == "" ?
                                COLORS.gray : (email != "" &&
                                emailError == "") ? COLORS.green
                                : COLORS.red
                            }}
                            />
        
        
                          </View>
                      }
                      />
                   
                 <View style={{
                    bottom:-330
                 }}>
                      {/*Button*/}
                   <AppButton 
                   label='Send Email'
                   disabled={isEnableSendEmail() ? false:true}
                   buttonStyle={{
                       height:50,
                       marginTop: SIZES.padding,
                       borderRadius: SIZES.radius,
                       backgroundColor: isEnableSendEmail () ? 
                       COLORS.gray: COLORS.secondary,
                       alignItems:'center'
                   }}
        
                   onPress={RestPassword}
                  
                   
                   />
                 </View>
                </View>
             )
      }



    return(
        <KeyboardAwareScrollView style={{ backgroundColor:COLORS.primary}}>
       <View
          style={{
            flex:1,
           
          }}
       >
        {/*renderHeader*/}
        {renderHeader()}

        {/*render Form*/}
        {renderFormInput()}
    

       </View>
       </KeyboardAwareScrollView>

    )
}


export default ForgetPassword;