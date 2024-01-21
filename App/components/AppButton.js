import React from "react";
import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    COLORS,FONTS
} from '../constants'


const AppButton =({label,disabled,buttonStyle,labelStyle,onPress,icon,iconStyle})=>{
    return(
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.primary,
                flexDirection:'row',
                ...buttonStyle
            }}
        >

            <Text
               style={{
                color:COLORS.white,
                ...FONTS.h3,
                ...labelStyle
               }}
            >{label}</Text>
            <Image 
             source={icon}
             style={{
                height:35,
                width:35,
                tintColor:COLORS.orange,
                marginHorizontal:10,
                ...iconStyle
             }}  
            />

        </TouchableOpacity>
    )
}

export default AppButton;