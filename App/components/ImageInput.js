import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ImagePickerIOS,
    Alert
} from 'react-native'
import { SIZES,images,icons, COLORS } from "../constants";
import * as ImagePicker from 'expo-image-picker';



const ImageInput=({imageUri, onChangeImage})=>{

    
    useEffect(()=>{
        requestPermission()
    },[])



    const requestPermission = async()=>{
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) alert('You need to enable permission to access the labirary')

    }


    function handlePress(){
        if (!imageUri) selectImage()
        else Alert.alert('Delete', 'Are you sure you want to delete this image?',[
            {text:'Yes', onPress:()=>onChangeImage(null)},
            {text:'No'}
        ])
    }


   const selectImage = async()=>{
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.5,
        })
        if(!result.canceled) onChangeImage(result.assets[0].uri)
    } catch (error) {
          console.log("Error")
    }
   }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
        <View
           style={style.container}
        >
            {!imageUri && (<Image source={icons.camera}
              resizeMode='contain'
              style={{
                height:80,
                width:80,
                borderRadius:SIZES.radius
              }}
            />)}
            {imageUri && <Image source={{uri:imageUri}} 
              style={{
                height:80,
                width:80,
                borderRadius:SIZES.radius
            }}/>}
        </View>
        </TouchableWithoutFeedback>
    )
}



const style = StyleSheet.create({
    container:{
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:SIZES.radius,
    overflow:'hidden'
    }
})

export default ImageInput;
