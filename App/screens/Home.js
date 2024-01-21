import React, {useState,} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    FlatList,
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FormModal} from '../components';
import{
    COLORS,
    SIZES,
    images,
    icons,
    FONTS,
} from '../constants'
import { donateType,appPanel } from '../constants/dummyData';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';





const Home = ({navigation})=>{

    const [modalVisible, setModalVisible]=useState(false)
    const [formType, setFormType] = React.useState("")

   

        
    function renderHeader(){
        return(
            <View
                style={{
                    height:250,
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
                         onPress={()=>navigation.openDrawer()}
                   >
                    <Image
                       source={icons.menu_1}
                       resizeMode="contain"
                       style={{
                        height:25,
                        width:25,
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
                        height:25,
                        width:25,
                        borderRadius:30,
                        borderWidth:2,
                        borderColor:COLORS.gray3
                       }}
                     />
                     </TouchableOpacity>
                </View>
            
            {/*title*/}
            <View style={{
                flexDirection:'row',
                marginVertical:20
                
            }}>
            <View
              style={{
                padding:SIZES.padding,
                bottom:SIZES.radius
              }}
            >
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    color:COLORS.gray3
                }}>SAVE</Text>
                  <Text style={{
                    fontSize:40,
                    fontWeight:'bold',
                    color:COLORS.orange
                }}>Life...</Text>

            </View>
           
           <View style={{
             height:110,
           }}>
           <Image 
                source={images.donate_logo}
                resizeMode='contain'
                style={{
                    height:100,
                    width:100,
                    marginVertical:140,
                    marginHorizontal:'10%',
                    borderRadius:80
                }}
            />
           </View>
           
            </View>
                

            </View>
        )
    }

    const renderBody=()=>{
        return(
           <View style={style.body}>
                   {/*background to style the curve*/}
            <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:COLORS.primary}} />
                   {/*View to style the Bottom curve*/}
            <View style={{flex:1, backgroundColor: COLORS.gray3,borderTopLeftRadius:SIZES.padding2}}>

                <View style={{
                    height:250,
                    marginTop:15,
                    justifyContent:'center',
                    alignItems:'center',
                    
                }}>

                <FlatList 
                       scrollEnabled={false}
                       showsVerticalScrollIndicator={false}
                       data={donateType}
                       keyExtractor={item=>`${item.id}`}
                       numColumns={2}
                       renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity
                               style={{
                              
                              //  height: hp('18%'), // 70% of height device screen
                              //  width: wp('48%') ,  // 80% of width device screen
                                borderRadius:SIZES.radius2,
                                paddingHorizontal:4,
                                 marginVertical:5,
                                justifyContent:'center',
                                alignItems:'center',
                                tintColor:COLORS.primary
                               }}
                               onPress={()=>{setFormType(item.formType);setModalVisible(true)}}
                            >
                        <ImageBackground source={item.photo} 
                
                              resizeMode='cover'
                              style ={{
                                width:175,
                                height:100,
                                 alignItems:'center',
                                
                            }}
                            imageStyle={{ 
                               borderRadius:SIZES.radius,
                               tintColor:COLORS.primary   
                            }}>
                             
                             <Image
                                 source={item.icon}
                                 style={{
                                    height:30,
                                    width:30,
                                    marginTop:SIZES.base,
                                    tintColor:COLORS.orange,
                                    
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
             showsVerticalScrollIndicator={false}   
        >
           

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

export default Home;