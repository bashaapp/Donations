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


const FeedBack =({route})=>{

    React.useEffect(()=>{
    const userData = route.params.userData

    setRecipient(userData)
   })
    const [recipient, setRecipient] = useState('')
    const [messageText, setMessageText] = useState('')
    const [sendTime, setSendTime] = useState('')
    const [recipientError,setRecipientError] = useState('')
    const [messageError,setMessageError] = useState('')
    const [loader, setLoader] = useState(false)



    function  renderHeader(){
        return(
            <View style={{
                marginTop:SIZES.base,
                alignItems:'center'
            }}>
                   <Text
                    style={{
                        marginTop:SIZES.base,
                        fontSize:SIZES.body3,
                        color:COLORS.gray2,
                        fontWeight:'400'
                    }}
                >Resopned The Donator..!</Text>

            </View>
        )
    }


    function isEnableDonate(){
        return recipient !='' && messageText !='' && recipientError == ""  &&
        messageError =="" 
    }

    function renderForm(){
        return(
            <View style={{
                 
                marginTop:SIZES.base,
                paddingHorizontal:SIZES.padding,

            }}>
          
                   {/*Email Input*/}
                   <FormInput 
                     label='Recipient Email:'
                     keyboardType='email-address'
                     containerStyle={{
                        marginTop:SIZES.radius, 
                        height:73,
                     }}
                     value={recipient}
                     onChange={(value)=>{
                        utils.validateInput(value, 1,
                        setRecipientError)
                        setRecipient(value)
                }}
                errorMsg={recipientError}   

               />

                   {/*message Input*/}
                   <FormInput 
                     label='Message:'
                     placeholder='Type something'
                     multiline={true}
                     numberOfLines={10}
                     inputStyle={{height:100,}}
                     containerStyle={{
                              marginTop:SIZES.radius, 
                              height:130,
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
                    marginTop:SIZES.padding2,
                    justifyContent:'center',
                    alignItems:'center'
                 }}
              >
                 <AppButton
                    label='Send'
                    icon={icons.send}
                    disabled={!isEnableDonate()}
                    buttonStyle={{
                        height:50,
                        width:"90%",
                        borderRadius:SIZES.radius,
                        backgroundColor:loader?
                        COLORS.gray:COLORS.primary
                    }}
                    labelStyle={{
                        ...FONTS.h3,
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

        db.collection('feedback')
        .add({
            userId:auth.currentUser?.uid,
            recipient:recipient,
            messageText:messageText,
            sendTime:sendTime
        })
        .then(()=>{
            Alert.alert('Message has been sent successfully')
            setLoader(false)
        })
        .catch((error)=>{
            Alert.alert(error.message)
            setLoader(false)
        })
        setRecipient('')
        setMessageText('')
        
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


export default FeedBack;