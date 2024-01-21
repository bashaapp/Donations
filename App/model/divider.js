import React from "react";
import { View } from "react-native";
import {
    COLORS,
    SIZES,
} from '../constants'

const Divider=()=>{
    return(
         <View style={{
            width:"100%",
            marginTop:SIZES.base,
            color:COLORS.primary,
            backgroundColor:COLORS.primary,
            height:1,
        }}
        />
    )
}

export default Divider;