import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { AppButton, FormInput } from '../../components';
import{
    COLORS,
    FONTS,
    SIZES,
    images,
    icons,
} from '../../constants';
import { utils } from '../../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';


const SignUp = ({navigation})=>{

    

    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPass, setConfirmPass] = React.useState("")
    const [showPass,setShowPass] = React.useState(false)
    const [showConfirm,setShowConfirm] = React.useState(false)



    const [emailError, setEmailError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [confirmPassError, setConfirmPassError] = React.useState("")


    const handleSignUp = ()=>{

      if(password == confirmPass) {

       
      }
    }

      

    function isEnableSignUp (){
        return email != "" && name !=""&& password !="" && confirmPass!="" &&
        emailError == "" && passwordError == "" && nameError== "" && confirmPassError==""
    }
   

    function renderHeader(){
        return(
            <View
               style={{
                height:'48%',
                justifyContent:'center',
                alignItems:'center'
               }}
            >
               <ImageBackground
                     source={images.login_backgd}
                     resizeMode='cover'
                     style={{
                        height:"100%",
                        width:'100%',
                    
                     }}
                    
               > 
               <View style={{backgroundColor:'rgba(185,228,208,0.5)', flex:1, alignItems:'center',}}>
                 <Image 
                   source={images.logo}
                   resizeMode='cover'
                   style={{
                     marginTop:SIZES.radius,
                     height:150,
                     width:150,
                  }}
                />

                 <Image 
                   source={icons.heart_logo}
                   resizeMode='contain'
                   style={{
                     height:60,
                     width:70,
                     marginTop:-60,
                     tintColor:COLORS.gray3
                    
                  }}
                />

                </View>

               </ImageBackground>
            </View>
        )
    }

    

    function renderFooter(){
        return(
            <View
               style={{
                flex:1,
                marginTop:-120,
                backgroundColor:COLORS.gray3,
                borderTopLeftRadius:SIZES.radius3,
                borderTopRightRadius:SIZES.radius3
               }}
            >
                {/*login title*/}
               <View style={{
                 padding:SIZES.radius2,
                 paddingLeft:SIZES.radius3
               }}>
                   <Text
                       style={{
                        ...FONTS.h3,
                        color:COLORS.black,
                        fontWeight:'bold'
                       }}
                   >Sign Up</Text>
               </View>

                {/*form container*/}
                 <View style={{
                  flex:1,
                  marginTop:-SIZES.padding,
                  paddingLeft:SIZES.radius2,
               }}  
                 >
                    {/*Name*/}
                    <FormInput 
                    placeholder='Name'
                    value={name}
                    containerStyle={{
                        marginTop:SIZES.radius,
                        height:65,
                        width:'95%',
                    }}
                    

                    onChange={(value)=>{
                        setName(value)
                    }}

                    errorMsg={nameError}
                    prependComponent={
                        <View
                            style={{
                                justifyContent:'center',
                                marginLeft:-10,
                                backgroundColor:COLORS.primary,
                                height:46,
                                width:45,
                                borderTopLeftRadius:SIZES.base,
                                borderBottomLeftRadius:SIZES.base,
                                alignItems:'center',
                                marginRight:5
                            }}
                        >

                            <Image 
                               source={icons.profile}
                               style={{
                                height:20,
                                width:20,
                              //  tintColor:COLORS.primary
                               }}
                            />

                        </View>
                    }
                    appendComponent={
                        <View
                        style={{
                            justifyContent:'center',
                            marginRight:10
                        }}
                        >
                         <Image 
                            source={name == '' ||
                            (name !="" && nameError == "")?
                             icons.correct : icons.cancel}

                           style={{
                               height:20,
                               width:20,
                               tintColor: (name == "" ?
                               COLORS.gray : (name != "" &&
                               nameError == "")?
                               COLORS.green : COLORS.red)

                        }}
                            />

                            

                        </View>
                    }
                    
                    />
                         {/*Email*/}
                    <FormInput
                        containerStyle={{
                            height:65,
                            width:'95%',
                        }}
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCompleteType='email'
                        value={email}
                        onChange={(value)=>{
                            //validate email
                            utils.validateEmail(value, setEmailError)
                            setEmail(value)
                        }}

                        errorMsg={emailError}
                        prependComponent={
                            <View
                                style={{
                                    justifyContent:'center',
                                    marginLeft:-10,
                                    backgroundColor:COLORS.primary,
                                    height:46,
                                    width:45,
                                    borderTopLeftRadius:SIZES.base,
                                    borderBottomLeftRadius:SIZES.base,
                                    alignItems:'center',
                                    marginRight:5
                                }}
                            >

                                <Image 
                                   source={icons.email_icon}
                                   style={{
                                    height:25,
                                    width:25,
                                    tintColor:COLORS.gray3
                                   }}
                                />

                            </View>
                        }
                        appendComponent={
                            <View
                               style={{
                                justifyContent:'center',
                                marginRight:10
                               
                               }}
                            >
                                <Image
                                  source={email == '' || (email !='' &&
                                  emailError == '')? icons.correct:icons.cross}
                                  style={{
                                    height:20,
                                    width:20,
                                    tintColor:email =='' ?
                                    COLORS.gray : (email !='' &&
                                    emailError == '') ? COLORS.green 
                                    :COLORS.red
                                  }}
                                />
                            </View>
                        }
                    />
                    {/*Password*/}
                     <FormInput 
                            placeholder='Password'
                             containerStyle={{
                                height:65,
                                width:'95%',
                            }}
                              secureTextEntry={!showPass}
                              autoCompleteType="password"
                              value={password}
                              onChange={(value)=>{
                                //validate Password
                                utils.validatePassword(value,setPasswordError)
                                setPassword(value)
                            }}

                            errorMsg={passwordError}
                            prependComponent={
                                <View
                                    style={{
                                        justifyContent:'center',
                                        marginLeft:-10,
                                        backgroundColor:COLORS.primary,
                                        height:46,
                                        width:45,
                                        borderTopLeftRadius:SIZES.base,
                                        borderBottomLeftRadius:SIZES.base,
                                        alignItems:'center',
                                        marginRight:5
                                    }}
                                >
    
                                    <Image 
                                       source={icons.lock}
                                       style={{
                                        height:20,
                                        width:20,
                                        tintColor:COLORS.gray3
                                       }}
                                    />
    
                                </View>
                            }
                            appendComponent={
                               <View style={{
                                justifyContent:'center',
                                marginRight:10
                               
                               }}>
                                 <TouchableOpacity
                                   style={{
                                     width:40, 
                                     alignItems:'flex-end'  
                                }}
                                onPress={()=>setShowPass(!showPass)}
                                >
                                    <Image 
                                    source={showPass ? icons.eye_close
                                        :icons.eye}
                                        style={{
                                            height:20,
                                            width:20,
                                            tintColor:COLORS.gray
                                        }}
                                    />
            
                                </TouchableOpacity>
                               </View>
                            }
                            />  

                    {/*ConfirmPassword*/}
                     <FormInput 
                            placeholder='Confirm Password'
                             containerStyle={{
                                height:65,
                                width:'95%',
                            }}
                              secureTextEntry={!showConfirm}
                              autoCompleteType="password"
                              value={confirmPass}
                              onChange={(value)=>{
                                //validate Password
                                utils.validatePassword(value,setConfirmPassError)
                                setConfirmPass(value)
                            }}

                            errorMsg={confirmPassError}
                            prependComponent={
                                <View
                                    style={{
                                        justifyContent:'center',
                                        marginLeft:-10,
                                        backgroundColor:COLORS.primary,
                                        height:46,
                                        width:45,
                                        borderTopLeftRadius:SIZES.base,
                                        borderBottomLeftRadius:SIZES.base,
                                        alignItems:'center',
                                        marginRight:5
                                    }}
                                >
    
                                    <Image 
                                       source={icons.lock}
                                       style={{
                                        height:20,
                                        width:20,
                                        tintColor:COLORS.gray3
                                       }}
                                    />
    
                                </View>
                            }
                            appendComponent={
                               <View style={{
                                justifyContent:'center',
                                marginRight:10
                               
                               }}>
                                 <TouchableOpacity
                                   style={{
                                     width:40, 
                                     alignItems:'flex-end'  
                                }}
                                onPress={()=>setShowConfirm(!showConfirm)}
                                >
                                    <Image 
                                    source={showConfirm ? icons.eye_close
                                        :icons.eye}
                                        style={{
                                            height:20,
                                            width:20,
                                            tintColor:COLORS.gray
                                        }}
                                    />
            
                                </TouchableOpacity>
                               </View>
                            }
                            />  
                   {/*Sign In Button*/}
                     <View style={{
                        flexDirection:'row',
                        width:'85%',
                       
                     }}>
                          <AppButton 
                               label='SIGNUP'
                               disabled={isEnableSignUp()? false:true}
                               buttonStyle={{
                                height:50,
                                width:'65%',
                                marginRight:15,
                                alignItems:'center',
                                marginTop:SIZES.padding2,
                                borderRadius:SIZES.radius,
                                backgroundColor:isEnableSignUp()?
                                COLORS.primary : COLORS.secondary
                               }}
                               labelStyle={{
                                ...FONTS.h3,
                                fontWeight:'bold',
                                marginLeft:50
                                
                               }}
                            onPress={()=>handleSignUp()}
   
                             />     
                               <AppButton 
                               label='BACK'
                               buttonStyle={{
                                height:50,
                                width:'40%',
                                alignItems:'center',
                                marginTop:SIZES.padding2,
                                borderRadius:SIZES.radius,
                                backgroundColor:COLORS.primary 
                               }}
                               labelStyle={{
                                ...FONTS.h3,
                                fontWeight:'bold',
                                marginLeft:50
                               }}
                            onPress={()=>navigation.goBack()}
   
                             />     

                     </View>
                 
                 </View>  
            </View>
        )
    }

    return(
        <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        contentContainerStyle={{
            flexGrow:1, 
        }}
       >
          {/*renderHeader*/}
           {renderHeader()} 

           {/*renderFooter*/}
           {renderFooter()}
        </KeyboardAwareScrollView>
    )
}

export default SignUp;