import React from "react";
import {
    View,
    StyleSheet
} from 'react-native'
import { SIZES } from "../constants";
import ImageInput from "./ImageInput";


const FormImageInput=({imageUris=[], onRemoveImage, onAddImage})=>{

    return(
        <View style={{flexDirection:'row'}}>

            {imageUris.map(uri =>
            (
                <View
                  key={uri}
                  style={{
                    marginRight:SIZES.base
                  }}
                >
                    <ImageInput imageUri={uri} onChangeImage={()=>onRemoveImage(uri)}/> 
                </View>
  
            ))}
            <ImageInput  onChangeImage={uri=>onAddImage(uri)} />
        </View>
    )
}

export default FormImageInput;