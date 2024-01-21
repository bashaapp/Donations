import AnimatedLottieView from 'lottie-react-native';
import React, { useState } from 'react';
import {View,StyleSheet, Modal} from 'react-native';
import * as Progress from 'react-native-progress';

import { COLORS, icons } from '../constants';



const UploadProgress = ()=>{
  const [progress, setProgress] = React.useState(0);
  const MovingBar = (props) => {
    
    React.useEffect(() => {
      setTimeout(() => {
        setProgress((p) => p + 0.01);
      },17);
    },[]);
    return <Progress.Bar progress={progress} {...props} />;
  };
    
    return(
         <Modal>
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        {progress < 1 ?
       ( <MovingBar indeterminate={false} color = {COLORS.primary} />
         ):(<AnimatedLottieView 
         autoPlay 
         loop={false}
         source={icons.done}
         style={{
          width:150
         }}
         />) }
        </View>
        </Modal>
        
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.gray3,
        zIndex:1
    }
})

export default UploadProgress;