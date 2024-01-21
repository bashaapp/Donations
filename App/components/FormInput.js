import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';


import {
    FONTS, SIZES, COLORS
} from '../constants';

const FormInput =({
 containerStyle,
 label,
 labelStyle,
 prependComponent,
 appendComponent,
 onChange,
 value='',
 inputStyle,
 placeholder,
 secureTextEntry,
 keyboardType = 'default',
 autoCompleteType = "off",
 autoCapitalize = "none",
 errorMsg ="",
 maxLength,
 multiline,
 numberOfLines
})=>{

 const [focus, setOnfocus] = React.useState(false)
    return(
        <View style={{...containerStyle}}>

            {/*label & Error msg*/}

            <View
            style={{
            flexDirection:'row',
            justifyContent:'space-between'
            }}
            >
                <Text style={{color:COLORS.black, ...FONTS.body4,fontWeight:'bold',...labelStyle}}>{label}</Text>
                <Text style={{ color:COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>

            </View>

            {/*Text input*/}
            <View
            style={[styles.textInputContainer,focus ? styles.focusOn : styles.focusOff]}
            onFocus={()=>setOnfocus(true)}
            onBlur={()=>setOnfocus(false)}
            
            >
                {prependComponent}

            <TextInput 
                style={{flex:1,...inputStyle}}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                onChangeText={(text)=> onChange(text)}
                maxLength={maxLength}
                multiline={multiline}
                numberOfLines={numberOfLines}
                
                                
                />
                {appendComponent}

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer:{
        flexDirection:'row',
        flex:1,
        paddingHorizontal:SIZES.base,
        marginTop:5,
        borderRadius:SIZES.base,
        backgroundColor:COLORS.lightGray2,
        marginLeft:-8,
      
       
        
    },
    focusOn:{
       
        borderColor:COLORS.primary,
        borderWidth:1,
        borderRadius:SIZES.radius
       
    },
    focusOff:{
      
    },
 

})


export default FormInput;