
import React,{useEffect, useState} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import {
    COLORS,
    icons,
    SIZES,
    FONTS,
    images
} from '../constants';
import {AppButton }from '../components';
import MessageModal from "../components/MessageModal";

const messages = [
    {
        id: 1,
        name: "Mohammed",
        phone: +96605550501,
        email:"mohammed2024@gmail.com",
        messageText:'Hi Dear,Hope You are Doing Well. I woulike to know further details about the process of the dontations, Could you please email me. Thank you',
        pickup:'20 streen, Jeddah City',
        pickupTime:"4:00pm",
        preferedDate:'15/03/2024'
    },
   
    {
        id: 2,
        name: "Hinson",
        phone: +96605550501,
        email:"mohammed2024@gmail.com",
        items:'blood',
        pickup:'20 streen, Jeddah City',
        pickupTime:"4:00pm",
        preferedDate:'15/03/2024'
       
    },
    {
        id: 3,
        name: "Saleh",
        phone: +96605550501,
        email:"mohammed2024@gmail.com",
        messageText:'blood',
        pickup:'20 streen, Jeddah City',
        pickupTime:"4:00pm",
        preferedDate:'15/03/2024'
    },
    {
        id: 4,
        name: "Chen",
        phone: +96605550501,
        email:"mohammed2024@gmail.com",
        items:'blood',
        pickup:'20 streen, Jeddah City',
        pickupTime:"4:00pm",
        preferedDate:'15/03/2024'
    },
    
]

const UserInbox = () => {

    const [userData, setUserData] = useState([])
    const[messageText,setMessageText]=useState("")
    const [visible, setVisible]=useState(false)


 

    {/*fetch only logged in user messages from database*/}
    const fetchData = async()=>{
       
    }

    useEffect(()=>{
        fetchData()
    },[])


    function  renderHeader(){
        return(
            <View style={{
                marginTop:SIZES.padding,
                alignItems:'center'
            }}>
                <Text
                   style={{
                    fontWeight:'bold',
                    fontSize:SIZES.h1,
                    color:COLORS.dark
                   }}
                >Inbox</Text>

            </View>
        )
    }

    function renderBody(){
        return(
            <ScrollView  
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={{
                 paddingBottom:100,
                 marginTop:SIZES.base,
                 
            }}>
                 
            <FlatList 
                data={messages}
                numColumns={1}
                renderItem={({item})=>(
                <View  style={style.card} >
                    <View style={{flexDirection:'row',}}>
                      <View style={{ flexDirection:'row', width:'75%'}}>
                        <Image 
                            source={images.donate_logo}
                            resizeMode='cover'
                            style={{
                                height:50,
                                width:50,
                                borderRadius:SIZES.radius,
                                paddingHorizontal:SIZES.base,
                                borderColor:COLORS.primary,
                                borderWidth:2
                            }}
                        />
                        <View  style={{
                            justifyContent:'center',
                            marginLeft:SIZES.base
                        }}>
                           <Text style={style.label}>Notification</Text>
                        </View>
                      </View>  
                      <TouchableOpacity  
                          style={{
                            marginTop:SIZES.padding,
                            justifyContent:'center',
                            alignItems:'center',
                            height:20,
                            width:20,
                            marginLeft:SIZES.padding2
                            
                          }}
                          // onPress={()=>navigation.navigate('Stack',{screen:'Donate',params:{item:item}})}>
                          onPress={()=>{
                               setMessageText(item.messageText);
                               setVisible(true)}}>
                           <Image 
                             source={icons.arrow}
                             resizeMode="contain"
                             style={{
                                width:20,
                                height:20,
                                tintColor:COLORS.orange
                             }}
                           />
                        </TouchableOpacity>
                    </View>
                </View>
             )}
             />

             <View style={{
                position:'absolute',
                top:100  
             }}>
             <MessageModal visible={visible}>
             <View style={style.msg}>
             <Text 
               numberOfLines={3}
               style={{
                ...FONTS.body3,
                fontWeight:'500',
                alignSelf:'center',
                color:COLORS.black,
                marginTop:SIZES.radius
            }}>"{messageText}"</Text>
         </View> 

         <View style={{
            alignItems:'center',
            position:'absolute',
            left:590,
            paddingHorizontal:75,
            top:25
         }}>
         <TouchableOpacity>
                <AppButton
                  buttonStyle={{
                    height:40,
                    width:40,
                    borderRadius:50,
                    backgroundColor:
                    COLORS.primary,
                    borderColor:COLORS.orange,
                    borderWidth:2
                }}
                icon={icons.cross}
                onPress={()=>{
                  //  submitForm()
                    setVisible(!visible)
                }}
                />
          </TouchableOpacity>
         </View> 
                </MessageModal>    
             </View>
            </ScrollView>
           
        )
    }


  
    return(
        <View
        style={style.container}  
   >

       {/*renderHeader*/}
       {renderHeader()}

       {/*renderbody*/}
       {renderBody()}
     

      
   </View>      
    )
}



const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
     },
    body:{
        flex:1, 
    },
    card:{
        height:55,
        margin:2,
        flex:1,
        borderBottomColor:COLORS.lightGray1,
        borderBottomWidth:1,
        paddingBottom:SIZES.base,
        marginTop:SIZES.radius,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    innerContainer:{
        flexDirection:'column',  
    },
    label:{
        fontWeight:'600',
        fontSize:15,
    },
    text:{
        fontWeight:'bold',
        color:COLORS.primary,
        fontSize:15,
    },
    leftSwipeItem: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
      },
      rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
      },
      msg:{
        height:200,
        marginTop:SIZES.padding,
        borderBottomLeftRadius:60,
        borderTopRightRadius:60,
        borderColor:COLORS.orange,
        borderWidth:3,
        width:"90%",
        alignSelf:'center',
        backgroundColor:COLORS.gray3,
        padding:SIZES.base  
    }
  
})


export default UserInbox;