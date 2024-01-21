import React ,{useEffect, useState}from "react";
import {
    View,
    Modal,
    StyleSheet,
    Animated
} from 'react-native'




const AppModal = ({
    visible,
    children,
})=>{

    const scaleValue = React.useRef(new Animated.Value(0)).current
    const [showModal, setShowModal] = React.useState(visible);

      useEffect(()=>{
       toggelModal()
      },[visible])

      const toggelModal=()=>{
        if(visible){
          setShowModal(true);
            Animated.spring(scaleValue,{
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }).start();
         }else{
            setTimeout(() =>  setShowModal(false),200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start();
         }
      }
    return(
        <Modal visible={showModal} transparent>
        <View style={style.modalBackGround}>
           <Animated.View
          style={[style.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
        </View>
    </Modal>
    )
}


const style = StyleSheet.create({
   modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
   // paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
    


export default AppModal;