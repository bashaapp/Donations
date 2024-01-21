import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AppButton, FormInput } from "../components";
import{
    COLORS,
    FONTS,
    SIZES,
    images,
    icons
} from '../constants';
import { utils } from '../utils';


const Account=({navigation})=>{

    const [newEmail, setNewEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState()
    const [passwordError, setPasswordError] = React.useState("")
    const [newPasswordError, setNewPasswordError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)


         {/*Update Auth Functions*/}
   const Reath = (password)=>{
  
   }


   const ChangePassword =()=>{

  
}

 const ChangeEmail =()=>{

    
}



const UpdateAccount =()=>{
  ChangeEmail();
  ChangePassword(); 
  Alert.alert('Your account has been updated successfull..')
  navigation.navigate('Home')
}



  function renderHeader(){
    return(
        <View
            style={{
                marginTop:SIZES.padding2,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <View style={{
                        marginLeft:-300,
                        marginTop:-40
                      }}>
                        <TouchableOpacity
                          onPress={()=>navigation.goBack()}
                        >
                          <Image 
                            source={icons.back}
                            style={{
                              height:30,
                              width:30,
                              tintColor:COLORS.primary
                            }}
                          />
                        </TouchableOpacity>
                      </View>
            <Text
                  style={{
                    fontSize:24,
                    fontWeight:'bold'
                  }}  
            >Update Account
            </Text>

            <Text
              style={{
                 ...FONTS.body4,
                 marginTop:SIZES.base,
                 color:COLORS.gray
              }}
            >Please Type in Your Email & Password to update</Text>
  
        </View>
    )
  }


  function renderForm(){
    return(
        <View
           style={{
            marginTop:SIZES.padding2
           }} 
        >

            <FormInput 
              label='New Email'
              keyboardType="email-address"
              autoCompleteType="email"
              containerStyle={{
                height:75,
                width:'99%',
            }}
            inputStyle={{
                paddingLeft:SIZES.base
              }}
              value={newEmail}
              onChange={(value)=>{
                  //validate email
                   utils.validateEmail(value, setEmailError)
                   setNewEmail(value)
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
                         source={newEmail=="" || (newEmail !='' &&
                          emailError =='')? icons.correct: icons.cancel}
                          style={{
                            height:20,
                            width:20,
                            tintColor:newEmail == ''?
                            COLORS.gray : (newEmail!="" &&
                            emailError=="") ? COLORS.green:COLORS.red
                          }}
                    />
                </View>
            }
            />

            <FormInput 
              label='Current Password'
              secureTextEntry={!showPass}
              autoCompleteType='password'
              value={password}
              onChange={(value)=>{

                //Validate Password
                utils.validatePassword(value, setPasswordError)
                
                setPassword(value)
            }}
              errorMsg={passwordError}
              containerStyle={{
                height:75,
                width:'99%',
                marginTop:SIZES.radius2
            }}
            inputStyle={{
                paddingLeft:SIZES.base
              }}
              appendComponent={
                <TouchableOpacity
                     style={{
                        width:40,
                        alignItems:'flex-end',
                        justifyContent:'center',
                        marginRight:SIZES.base
                     }}
                     onPress={()=>setShowPass(!showPass)}
                >
                    <Image
                        source={showPass ? icons.eye_close:icons.eye}
                        style={{
                            height:20,
                            width:20,
                            tintColor:COLORS.gray
                        }}
                    />

                </TouchableOpacity>
              }
            />

            <FormInput
               label='New Password'
               secureTextEntry={!showPass}
               autoCompleteType='password'
               value={newPassword}
               containerStyle={{
                height:75,
                width:'99%',
                marginTop:SIZES.radius2,
            }}
              inputStyle={{
                paddingLeft:SIZES.base
              }}
              onChange={(value)=>{

                //Validate Password
                utils.validatePassword(value, setNewPasswordError)
                
                setNewPassword(value)
            }}

               errorMsg={newPasswordError}
               appendComponent={
                <TouchableOpacity
                     style={{
                        width:40,
                        alignItems:'flex-end',
                        justifyContent:'center',
                        marginRight:SIZES.base
                     }}
                     onPress={()=>setShowPass(!showPass)}
                >
                    <Image
                      source={showPass ? icons.eye_close:icons.eye}
                      style={{
                        height:20,
                        width:20,
                        tintColor:COLORS.gray
                      }}
                    />

                </TouchableOpacity>
               }
            />

            
        </View>
        
    )
  }

  function renderFooter(){
    return(
        <View
            style={{
                marginTop:-SIZES.padding2
            }}
        >
            <AppButton 
               label='Update'
               buttonStyle={{
                height:50,
                marginTop:100,
                borderRadius:SIZES.radius,
                alignItems:'center',
               }}
               labelStyle={{
                ...FONTS.h3,
                fontWeight:'bold',
                color:COLORS.gray3,
                paddingHorizontal:20,
                left:20
                
                
            }}
               onPress={UpdateAccount}
            />

        </View>
    )
  }

    return(
        <View
           style={{
            flex:1,
            paddingVertical:SIZES.padding,
            backgroundColor:COLORS.white
           }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex:1,
                    paddingHorizontal:SIZES.padding
                }}
            >

                   {/*renderHeader*/}
                   {renderHeader()}

                   {/*renderForm*/}
                   {renderForm()}
                   
                   {/*renderFooter*/}
                   {renderFooter()}

            </KeyboardAwareScrollView>
            
        </View>
    )
}



export default Account;









