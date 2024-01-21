import React ,{useEffect,}from "react";
import {
    View,
    Modal,
    StyleSheet,
    Animated
} from 'react-native'




const MessageModal = ({
    visible,
    children,
})=>{

    const scaleValue = React.useRef(new Animated.Value(0)).current
    const [showModal, setShowModal] = React.useState(visible);

    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };


    return(
      <Modal transparent visible={showModal}>
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
  },

});
    


export default MessageModal;