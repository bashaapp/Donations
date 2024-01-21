import React, {useState} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    FlatList,
    Modal,
    Alert,
    Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppButton, FormInput, FormModal, ImageInput } from '../components';
import{
    COLORS,
    SIZES,
    images,
    icons,
    FONTS,
} from '../constants'
import { appPanel, donateType } from '../constants/dummyData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';






const AdminPanel = ({navigation})=>{

    const [modalVisible, setModalVisible]=useState(false)
    const [formType, setFormType] = React.useState("")



    const handleSignOut = ()=>{
       
      }

      
   
   

    function renderHeader(){
        return(
            <View
                style={{
                    height:210,
                    backgroundColor:COLORS.primary,
                    borderBottomRightRadius:SIZES.radius3
                }}
            >
                <View
                   style={{
                    marginTop:SIZES.radius2,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    paddingHorizontal:SIZES.radius,
                   }}
                >
                    {/*left menu icon*/}
                   <TouchableOpacity 
                         onPress={handleSignOut}
                   >
                    <Image
                       source={icons.logout}
                       resizeMode="contain"
                       style={{
                        height:30,
                        width:30,
                        tintColor:COLORS.gray3
                       }}
                    />
                   </TouchableOpacity>

                       
                      {/*right profile icon*/}
                     <TouchableOpacity>
                     <Image 
                       source={images.donate_logo2}
                       resizeMode='conver'
                       style={{
                        height:30,
                        width:30,
                        borderRadius:30,
                        borderWidth:2,
                        borderColor:COLORS.gray3
                       }}
                     />
                     </TouchableOpacity>
                </View>
            
            {/*title*/}
            <View style={{
                flex:1
                
            }}>
            
           <View style={{
             height:110,
             alignItems:'center',
             justifyContent:'center'
           }}>
           <Image 
                source={images.donate_logo2}
                resizeMode='contain'
                style={{
                    height:170,
                    width:250,  
                }}
            />
           </View> 
            </View>
                

            </View>
        )
    }

    function renderBody(){
        return(
            <View style={style.body}>
                    {/*background to style the curve*/}
             <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:COLORS.primary}} />
                    {/*View to style the Bottom curve*/}
             <View style={{flex:1, backgroundColor: COLORS.gray3,borderTopLeftRadius:SIZES.padding2}}>
 
                 <View style={{
                     height:330,
                     marginTop:SIZES.radius,
                     justifyContent:'center',
                     alignItems:'center',
                     
                 }}>
 
                 <FlatList 
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={appPanel}
                        keyExtractor={item=>`${item.id}`}
                        numColumns={2}
                        renderItem={({item,index})=>{
                         return(
                             <TouchableOpacity
                                style={{
                                 height:111,
                                 width:180,
                                 borderRadius:SIZES.radius2,
                                 paddingHorizontal:4,
                                 justifyContent:'center',
                                 alignItems:'center'
                                }}
                               // onPress={()=>{setFormType(item.formType);setModalVisible(true)}}
                               onPress={()=>navigation.navigate('AdminStack',{screen:item.value})}
                             >
                         <ImageBackground source={item.photo} 
                               resizeMode='cover'
                               style ={{
                                  height:100,
                                  width:'100%',
                                  alignItems:'center',
                             }}
                             imageStyle={{ 
                              //  borderRadius:SIZES.radius,
                                  borderTopRightRadius:SIZES.radius2,
                                  borderBottomLeftRadius:SIZES.radius2,

                                tintColor:COLORS.primary    
                             }}>
                              
                              <Image
                                  source={item.icon}
                                  style={{
                                     height:50,
                                     width:50,
                                     marginTop:SIZES.base,
                                     tintColor:COLORS.gray3,
                                     
                                  }}
                              />
 
 
                              <Text
                                  style={{
                                     ...FONTS.h3,
                                     color:COLORS.gray3,
                                     fontWeight:'bold'
                                  }}
                              >{item.name}</Text>
                               
 
                             </ImageBackground>
 
                             </TouchableOpacity>
                         )
                        }}
                     />
 
                 <FormModal
                    modalVisible={modalVisible} 
                    setModalVisible = {setModalVisible} 
                    formType={formType}
                
                 />    
                 </View>
               
             </View>
            </View>
         )

    }


    return(
        <ScrollView
             contentContainerStyle={style.container}
             showsVerticalScrollIndicator={false}>

            {/*renderHeader*/}
            {renderHeader()}
            
            {/*renderBody*/}
            {renderBody()}


            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                flexGrow:1,
                paddingHorizontal:SIZES.padding
              }}
            >
        
            </KeyboardAwareScrollView>

        </ScrollView>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.gray3
        
       
     },
    body:{
        flex:1,
       
    },
 
  
})

export default AdminPanel;