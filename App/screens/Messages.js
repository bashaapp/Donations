import React,{useEffect, useState} from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    Alert,
    TouchableOpacity,
    SafeAreaView,
  
} from 'react-native'
import {
    COLORS,
    icons,
    images,
    SIZES,
    FONTS
} from '../constants';


import { AppButton} from "../components";
import { Swipeable } from 'react-native-gesture-handler';
import AppModal from "../components/AppModal";
import { SwipeListView } from "react-native-swipe-list-view";





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



const MessagesList = ({navigation})=>{

    const [userData, setUserData] = useState([]);
    
    const [loading, setLoading] = useState(true)
    const [deleted, setDeleted] = useState(false)
    const[name,setName]=useState("")
    const[messageText,setMessageText]=useState("")
    const [email, setEmail] = useState("")
    const [visible,setVisible] = useState(false)





    {/*fetch all messages offers from database*/}
    const fetchData = async()=>{
        try {
          
            setUserData(list)
            if(loading){
                setLoading(false)
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[])


    useEffect(()=>{
        fetchData()
        setDeleted(false)
    },[deleted])


    {/*handle delete donation offer*/}
    const handleDelete =(id)=>{
        Alert.alert(
            'Delete Message',
            'Are you sure?',
            [
                {
                    text:'Cancel',
                    onPress : () => console.log('Cancel Pressed'),
                    style:'cancel'
                },
                {
                    text:'Confirm',
                    onPress:()=>deleteUserById(id)
                }
            ],
            {cancelable:false}
        )

    }

          {/*Delete user donation function*/}
    const deleteUserById = async(id)=>{
      
    }
   
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
                >Messages</Text>

            </View>
        )
    }


       {/*function to display the data from firebase into swipe view list*/}
    const VisibleItem = props =>{
        const {data} = props
        return(
            <View  style={style.rowFront} > 
            <View style={{flexDirection:'row'}}>
              <View style={{
                         height:65,
                        borderRadius:SIZES.radius,
                        borderWidth:1,
                        borderColor:COLORS.primary,
                        justifyContent:'center',
                        alignItems:"center"
                    }}>
              <Image 
                  source={images.email_}
                    resizeMode='contain'
                    style={{
                        height:58,
                        width:85,

                    }}
               />
              </View>
              <View style={{marginLeft:SIZES.base,justifyContent:'center', width:'70%'}}>
               <Text style={style.label}>Message from:</Text>
               <Text style={style.text}>{data.item.name}</Text>
              </View>

              <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginLeft:-35

              }}>
                <Image 
                   source={icons.arrow}
                   resizeMode='contain'
                   style={{
                    height:18,
                    width:18,
                    tintColor:COLORS.primary
                   }}
                />
              </View>
              
            </View>
        </View>
     )
    }

    const renderItem=(data)=>{

       return <VisibleItem data={data} />
       
        
    }
    const HiddenItemAction = props => {
        const {data} = props
        return(
            <View style={style.rowBack}>
                <TouchableOpacity   onPress={()=>{
                             setName(data.item.name),
                             setEmail(data.item.email);
                             setMessageText(data.item.messageText);
                             setVisible(true)}} style={[style.backRightBtn,style.backRightBtnLeft]}>
                     <Text style={style.textBtn}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleDelete(data.item.id)} style={[style.backRightBtn,style.backRightBtnRight]}>
                     <Text style={style.textBtn}>Delete</Text>
                </TouchableOpacity>
                

            </View>
        )

    }

    const renderHiddenItem=(data,rowMap)=>{
        return(
            <HiddenItemAction 
              data={data}
           //   rowMap={rowMap}
            //  onClose={() => closeRow(rowMap, data.item.key)}
            //  onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        )
    }
   

    function renderBody(){
        return(
            <SafeAreaView>   
              <View styel={style.containerWrap}>
              <SwipeListView
                 data={messages}
                 renderItem={renderItem}
                 renderHiddenItem={renderHiddenItem}
                 rightOpenValue={-150}
                 disableRightSwipe
             />
              </View>

             <View style={{
                position:'absolute',
                top:100,
                
             }}>

             <AppModal visible={visible}>

                    {/*Profile Container*/}
           <View style={{
              marginTop:-SIZES.padding,
              position:'absolute',
              top:-10,
              alignSelf:'center',
              height:80,
              width:80,
              borderRadius:SIZES.radius3,
              paddingHorizontal:SIZES.base,
              borderColor:COLORS.primary,
              borderWidth:2,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:COLORS.gray3
           }}>

             <Image 
                source={icons.message}
                resizeMode='contain'
                style={{
                    height:50,
                    width:50,
                    tintColor:COLORS.primary   
                }}
             />
           </View>
            {/*name & email container*/}
           <View style={{
                 marginTop:SIZES.radius, 
                 alignItems:'center'
                 }}>
           <Text style={{
                ...FONTS.h1,
                fontWeight:'bold',
                
                }}>{name}</Text>
              <Text style={{
                ...FONTS.h4,
                fontWeight:'bold',
                
                }}>{email}</Text>

           </View>
 

           {/*message container*/}
         <View
            style={{
                height:150,
                marginTop:SIZES.padding,
                borderRadius:SIZES.radius,
                borderColor:COLORS.primary,
                borderWidth:2,
                width:"90%",
                alignSelf:'center',
                backgroundColor:COLORS.gray3,
                padding:SIZES.base
                
            }}
         >
            <Text style={{
                ...FONTS.body3,
                fontWeight:'500',
                alignSelf:'center'
            }}>"{messageText}"</Text>
         </View> 

         <View style={{
            marginTop:SIZES.padding,
            alignItems:'center'
         }}>
         <TouchableOpacity>
                <AppButton
                  label='Reply'
                  buttonStyle={{
                    height:50,
                    width:"50%",
                    borderRadius:SIZES.radius,
                    backgroundColor:
                    COLORS.primary,
                }}
                labelStyle={{
                    ...FONTS.h3,
                    fontWeight:'bold',
                    color:COLORS.gray3,
                    paddingHorizontal:20,
                    left:20
                    
                    
                }}

                onPress={()=>{
                  //  submitForm()
                   setVisible(!visible)
                   navigation.navigate('AdminStack',{screen:'Feedback',params:{userData:email}})

                }}
                />
          </TouchableOpacity>
         </View>
                </AppModal>   
             </View>
            </SafeAreaView>
           
        )
    }


    return(
        <View>

      

       {/*renderbody*/}
       {renderBody()}
     

      
   </View>      
    )
}



const style= StyleSheet.create({
    containerWrap:{
      marginTop:50
    },
    container:{
        height:80,
        marginVertical:10,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        paddingLeft:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84
     },
    body:{
        flex:1, 
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
      rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 90,
        margin: 5,
        justifyContent:'center',
        alignItems:"center",
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
      },
      backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
      },
      backRightBtnLeft: {
        backgroundColor:COLORS.gray,
        right: 75,
      },
      backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
      textBtn: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: COLORS.gray3,
      },
    
   
  
})


export default MessagesList;