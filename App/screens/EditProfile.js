import React,{useState} from "react";
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Alert,
    ImageBackground,
    Modal
} from 'react-native'
import{
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  Animated from 'react-native-reanimated';
import {AppButton, UploadProgress} from '../components'
import  BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'expo-image-picker';





const EditProfile=({navigation})=>{

  const sheetRef = React.createRef(null);
  const animated = new Animated.Value(1);
  const [image, setImage] = useState(null);
  const [uploading,setUploading] = useState(false)
  const [userData, setUserData] = useState(null);



  React.useEffect(()=>{
   
  },[])



  const updateProfile = async()=>{
   
  }


  {/*upload Image to firebase sotrage*/}

   const uploadImage = async ()=>{
     
    
       
    
     }


   {/*Render COntent for Bottom Sheet*/}
   const renderContent=()=>{
    return(
      <View style={style.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <AppButton
       label='Take Photo'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
      onPress={OpenCamera}
      />

       <AppButton
       label='Choose from Library'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
        
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
       onPress={pickImage}
      />
     
     <AppButton
       label='Cancel'
       buttonStyle={{
        padding: 13,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        marginVertical: 7,
       }}
       labelStyle={{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
       }}
       onPress={() => sheetRef.current.snapTo(1)}
      />
     
    </View>
    )
  }
     
   {/*Render Header For Bottom Sheet*/}
   const renderHeader=()=>{
    return(
      <View style={style.header}>
      <View style={style.panelHeader}>
        <View style={style.panelHandle} />
      </View>
    </View>
    )
  }


   {/*Pick Image Function*/}
   const pickImage = async () => {

const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
if (!granted){
Alert.alert("Donate", 'You need to enable permission from the settings  to access the camera..!')
return;
}
let result = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.Images,
allowsEditing: true,
aspect: [4, 3],
quality: 1,
onPress:sheetRef.current.snapTo(1)
});

console.log(result);

if (!result.canceled) {
setImage(result.assets[0].uri);

}

}; 
  {/*Open Camera to take Pic*/}
  const OpenCamera = async () => {
  //permissions request is necessary for Openning Camera
  const {granted} = await ImagePicker.requestCameraPermissionsAsync()
   if (!granted){
    Alert.alert("Donation", 'You need to enable permission from the settings to access the camera..!')
    return ;
   }
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    onPress:sheetRef.current.snapTo(1)
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};     

    function renderHead(){
             return(
                <Animated.View style={{opacity: Animated.add(0.1, Animated.multiply(animated, 1.0))}}>
                  
                    <View
                       style={{
                        height:200,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.lightGray1,
                        borderBottomLeftRadius:60,
                        borderBottomRightRadius:60
                       }}
                    >
                      <View style={{
                        marginLeft:-310
                      }}>
                        <TouchableOpacity
                          onPress={()=>navigation.goBack()}
                        >
                          <Image 
                            source={icons.arrow_back}
                            style={{
                              height:23,
                              width:23,
                              tintColor:COLORS.primary
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                     
                       <TouchableOpacity 
                             onPress={()=> sheetRef.current.snapTo(0)} 
                        >
                        <View style={{
                            height:80,
                            width:90,
                            borderRadius:SIZES.radius,
                            justifyContent:'center',
                            alignItems:'center',
                            borderColor:COLORS.gray3,
                            borderWidth:2
        
                        }}>
                            <ImageBackground

                                 imageStyle={{
                                    borderRadius:SIZES.radius,
                                 }} 
                                 source={{uri:image}}
                                 resizeMode='cover'
                                 style={{
                                   width:90,
                                   height:80,
                                  
                                 }}
                            >
                                <View style={{
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}   
                                >
                                    <Image 
                                      source={icons.camera}
                                      style={{
                                        height:40,
                                        width:40,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        tintColor:COLORS.gray3
                                      }}
                                    />
        
                                </View>
                        </ImageBackground>
                        </View>
                       </TouchableOpacity>

                       {/*Name*/}
                       <View
                           style={{
                            marginTop:SIZES.base
                           }}
                       >
                           <Text
                               style={{
                                ...FONTS.h2,
                                fontWeight:'bold'
                               }}
                           >{auth.currentUser?.email}</Text>
                       </View>
                    </View>
                </Animated.View>
              
             )
    }


    function renderDetails(){
     return(
        <View
            style={{
                flex:1,
              }}
           >
            {/*edit name*/}
            
          <View
            style={style.details}
   >
           <Image 
              source={icons.user}
              resizeMode='contain'
              style={{
                  height:20,
                  width:20,
                  tintColor:COLORS.gray
                }}
     />
          <TextInput 
             placeholder="Name"
             placeholderTextColor='#66666666'
             autoCorrect={false}
             value={userData ? userData.name : ''}
              onChangeText ={(txt) => setUserData({...userData, name: txt})}
             style={{
                paddingLeft:5,
                color:'#05375a'
             }}
        />

       </View>   

            {/*edit email*/}  
            <View
                style={style.details}
            >
              <Image 
                source={icons.email_icon}
                resizeMode="contain"
                style={{
                  height:22,
                  width:22,
                  tintColor:COLORS.gray
                }}
              />
              <TextInput 
                  placeholder="Email"
                  placeholderTextColor='#66666666'
                  keyboardType="email-address"
                  autoCorrect={false}
                  value={userData ? userData.email : ''}
                  onChangeText={(txt) => setUserData({...userData, email: txt})}
                 style={{
                    paddingLeft:5,
                    color:'#05375a' 
                 }}
              />   
            </View>   
            {/* edit phone number*/} 
             <View
                style={style.details}
             >
                 <Image
                   source={icons.phone}
                   resizeMode='contain'
                   style={{
                    height:22,
                    width:22,
                    tintColor:COLORS.gray
                   }}
                 />

                 <TextInput 
                   placeholder="Phone"
                   keyboardType="phoen-pad"
                   placeholderTextColor='#66666666'
                   autoCorrect={false}
                   value={userData ? userData.phone : ''}
                   onChangeText={(txt) => setUserData({...userData, phone: txt})}
                   style={{
                    paddingLeft:5,
                    color:'#05375a'
                   }}
                 />
             </View>   
             {/*edit address*/}
             <View style={style.details}
             >
              <Image 
                 source={icons.location}
                 resizeMode="contain"
                 style={{
                  height:22,
                  width:22,
                  tintColor:COLORS.gray
                 }}
              />
                
                <TextInput 
                  placeholder="Address"
                  placeholderTextColor='#66666666'
                  autoCorrect={false}
                  value={userData ? userData.address : ''}
                  onChangeText={(txt) => setUserData({...userData, address: txt})}
                  style={{
                    paddingLeft:5,
                    color:'#05375a'
                  }}
                />

             </View>

             {/*Update Button*/}  
             {!uploading ?
             <View
                style={{
                  marginTop:-SIZES.base,
                  justifyContent:'center',
                  alignItems:'center'
                }}
             >
               <AppButton 
                 label="Update"
                 labelStyle={{
                  fontWeight:'bold',
                  ...FONTS.h3
                 }}
                 buttonStyle={{
                  height:45,
                  width:'80%',
                  alignItems:'center',
                  marginTop:'20%',
                  borderRadius:SIZES.radius,
                  backgroundColor:COLORS.primary,
                  bottom:SIZES.padding2
                 }}

                onPress={updateProfile}
               />
             </View> 
              
              :<UploadProgress />
            }
              
               {/*Bottom Sheet Menu*/}
               <BottomSheet 
                 ref={sheetRef}
                 snapPoints={[350,0]}
                 renderContent={renderContent}
                 renderHeader={renderHeader}
                 initialSnap={1}
                 callbackNode={animated}
                 enabledGestureInteraction={true}
                 
               />
           </View>
     )
    }

   
            
    return(
      <>
      <KeyboardAvoidingView
      behavior='padding'
      style={{
         //flex:1,
      }}
      >
      {/*<Modal animationType='slide'>*/}
      <KeyboardAwareScrollView
       keyboardDismissMode='on-drag'
      >
                    {/*renderHeader*/}
                    {renderHead()}
                    {/*renderDetails*/}
                    {renderDetails()}
                </KeyboardAwareScrollView>     

            
            </KeyboardAvoidingView>
            </>           
    
    )
}

const style = StyleSheet.create({
    details:{
        marginLeft:SIZES.padding2,
        marginRight:SIZES.padding,
        flexDirection: 'row',
        marginTop: SIZES.padding,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
        paddingBottom: SIZES.base,
       },
      
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        bottom:10
      },
      header: {
        marginTop:35,
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginBottom: 10,
      },
      panelTitle: {
        ...FONTS.h1,
        fontWeight:'600',
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      
      
     
})

export default EditProfile;