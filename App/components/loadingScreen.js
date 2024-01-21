import React from "react";
import{
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import{
    COLORS
} from '../constants'


const LoadingScreen=()=>{
    const [loading,setLoading] = React.useState(false)
    return(
        <View style={{flex:1,
            borderRadius:20, backgroundColor:COLORS.primary, opacity:0.3, alignItems:'center', justifyContent:'center'}}>
           <ActivityIndicator animating={loading}
            size='large' color={COLORS.gray}
       />
           </View>
    )
}


export default LoadingScreen;