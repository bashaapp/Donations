import React, { useEffect } from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator
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


const SignIn = ({navigation})=>{

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState()
    const [passwordError, setPasswordError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [loading,setLoading] = React.useState(false)



    const loader =()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },7000);
    }     


    const handleSignIn =()=>{
       
    
    } 



    useEffect(()=>{
       
    },[])
   



    function isEnableSignIn(){
        return email !=''  && password !='' && emailError==""
    }

    function renderHeader(){
        return(
            <View
               style={{
                height:'50%',
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
                     height:180,
                     width:180,
                  }}
                />

                 <Image 
                   source={icons.heart_logo}
                   resizeMode='contain'
                   style={{
                     height:70,
                     width:100,
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
                marginTop:-70,
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
                   >Sign In</Text>
               </View>

                {/*email & password form*/}
                 <View style={{
                  flex:1,
                  marginTop:-SIZES.padding,
                  paddingLeft:SIZES.radius2,
               }}  
                 >
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
                   {/*Sign In Button*/}
                   <AppButton 
                               label='LOGIN'
                               disabled={isEnableSignIn()? false:true}
                               buttonStyle={{
                                height:50,
                                width:'95%',
                                alignItems:'center',
                                marginTop:SIZES.padding2,
                                borderRadius:SIZES.radius2,
                                backgroundColor:isEnableSignIn()?
                                COLORS.primary : COLORS.secondary
                               }}
                               labelStyle={{
                                ...FONTS.h3,
                                fontWeight:'bold',
                                left:30
                               }}
                               onPress={()=>{navigation.navigate('Tabs')}}
                             />     
                   {/*forgot Passwor & SignUp*/} 
                   <View
                    style={{
                        marginTop:SIZES.base,
                       justifyContent:'space-between',
                       flexDirection:'row',
                      
                    }}
                 >
                    {/*forgot Password*/}
                    <AppButton
                         label='Forgot Password?'
                         buttonStyle={{
                             backgroundColor:null,
                             marginLeft:SIZES.radius

                   }}

                         labelStyle={{
                            color:COLORS.gray,
                            ...FONTS.body4,
                            fontWeight:'bold',

                      }}

                      onPress={()=>navigation.navigate('Auth',{screen:'ForgetPassword'})}
                    />


                    <AppButton 
                        label='Sign up'
                        buttonStyle={{
                           backgroundColor:null,
                           marginRight:SIZES.radius2,
                          
                    }}
                       labelStyle={{
                           color:COLORS.primary,
                           ...FONTS.h3,
                           fontWeight:'bold'
                    }}
                     onPress={()=>navigation.navigate("SignUp")}
                    />


                 </View>              
                 </View>  
            </View>
        )
    }

    return(
       <View style={{flex:1}}>
         {loading ? <View style={{height:"100%",
            width:"100%", borderRadius:20, backgroundColor:COLORS.primary, alignItems:'center', justifyContent:'center'}}>
           <ActivityIndicator animating={loading}
            size='large' color={COLORS.darkGray2}
       />
           </View> : 
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
    }
       </View>
    )
}

export default SignIn;