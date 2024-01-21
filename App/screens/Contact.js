import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Alert
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { db,auth } from '../../firebase';
import { AppButton, FormInput } from '../components';
import{
    COLORS,
    icons,
    SIZES, 
    FONTS 
} from '../constants'
import { utils } from '../utils';


const Contact =()=>{

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [messageText, setMessageText] = useState('')
    const [sendTime, setSendTime] = useState('')
    const [nameError,setNameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [messageError,setMessageError] = useState('')
    const [loader, setLoader] = useState(false)



    function  renderHeader(){
        return(
            <View style={{
                marginTop:120,
                alignItems:'center'
            }}>
                <Text
                   style={{
                    fontWeight:'bold',
                    fontSize:25,
                    color:COLORS.dark
                   }}
                >Drop us a line</Text>

                <Text
                    style={{
                        marginTop:SIZES.base,
                        fontSize:SIZES.body4,
                        color:COLORS.gray2,
                        fontWeight:'400'
                    }}
                >We would love to hear from you..!</Text>

            </View>
        )
    }


    function isEnableDonate(){
        return name !=''  && email !=''
        && messageText !=''  && nameError == "" &&
         emailError == ""  &&
        messageError =="" 
    }

    function renderForm(){
        return(
            <View style={{
                 
                marginTop:SIZES.padding2,
                paddingHorizontal:SIZES.padding,

            }}>
                 {/*Name Input*/}
               <FormInput 
                     label='Name:'
                     labelStyle={{
                        fontSize:15
                     }}
                     inputStyle={{
                        fontSize:15
                     }}
                     maxLength={20}
                     containerStyle={{
                        marginTop:SIZES.radius, 
                        height:70,
                     }}
                     value={name}
                     onChange={(value)=>{
                        utils.validateInput(value, 1,
                        setNameError)
                        setName(value)
                }}
                errorMsg={nameError}   

                  
               />

                   {/*Email Input*/}
                   <FormInput 
                     label='Email:'
                     keyboardType='email-address'
                     maxLength={20}
                     inputStyle={{
                        fontSize:15
                     }}
                     containerStyle={{
                        marginTop:SIZES.radius, 
                        height:70,
                     }}
                     labelStyle={{
                        fontSize:15
                     }}
                     value={email}
                     onChange={(value)=>{
                        utils.validateInput(value, 1,
                        setEmailError)
                        setEmail(value)
                }}
                errorMsg={emailError}   

               />

                   {/*message Input*/}
                   <FormInput 
                     label='Message:'
                     labelStyle={{
                        fontSize:15
                     }}
                     placeholder='Type something'
                     multiline={true}
                     numberOfLines={10}
                     maxLength={120}
                     inputStyle={{height:100,}}
                     containerStyle={{
                              marginTop:SIZES.radius, 
                              height:120,
                           }}
                           
                    
                     value={messageText}
                     onChange={(value)=>{
                        setMessageText(value)
                        
                }}
                errorMsg={messageError} 
               />


               {/*Send Button*/}
               <View
                 style={{
                    marginTop:150,
                    justifyContent:'center',
                    alignItems:'center'
                 }}
              >
                 <AppButton
                    label='SEND'
                    icon={icons.send}
                   
                    disabled={!isEnableDonate()}
                    buttonStyle={{
                        height:70,
                        width:"90%",
                        borderRadius:SIZES.radius,
                        backgroundColor:loader?
                        COLORS.gray:COLORS.primary
                    }}
                    labelStyle={{
                        ...FONTS.h1,
                        fontWeight:'bold',
                        color:COLORS.gray3,
                        paddingHorizontal:0
                    }}

                    onPress={sendMessage}
                 />
              </View>    
            </View>
        )

    }


    const sendMessage = async()=>{

        setLoader(true)

       
    }



    return(
        <KeyboardAvoidingView
                behavior='padding'
                style={style.container}
      >

            {/*render Header*/}
             {renderHeader()}
             <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
            >
             {/*renderForm*/}
             {renderForm()}
             </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.gray3,
    }
})


export default Contact;