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



const appPanel = [
    {
        id: 1,
        name: "Jack Chris",
        phone: +96605550501,
        email:"jack@gmail.com",
        items:'blood',
        pickup:'20 streen, Jeddah City',
        pickupTime:"4:00pm",
        preferedDate:'15/03/2024'
    },
   
    {
        id: 2,
        name: "Ali Mohammed",
        icon: icons.email_icon,
        photo:images.backgroundColor_2,
        value:'Messages'
       
    },
    {
        id: 3,
        name: "Tom Omar",
        icon: icons.user,
        photo:images.backgroundColor_2,
        value:'UsersList'
    },
    {
        id: 4,
        name: "Jone kedy",
        icon: icons.user,
        photo:images.backgroundColor_2,
        value:'UsersList'
    },
    
]



const DonationList = ({navigation})=>{

    const [userData, setUserData] = useState([]);
    
    const [loading, setLoading] = useState(true)
    const [deleted, setDeleted] = useState(false)




    {/*fetch all donations offers from database*/}
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
            'Delete Donation Offer',
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

    function ListItemDelet(item){

        
        return (
          <View style={{flexDirection:'row',}}>
        {/*    <View
             style={{
                backgroundColor:'blue',
                height:110,
                width:100,
                marginRight:-2,
                justifyContent:'center',
                alignItems:'center',
                margin:2,
               
            }}
            >
                 <TouchableOpacity 
                onPress={()=>{setName(item.email),setEmail(item.name);setModalVisible(true)}}>


                   <Text>View</Text>
                </TouchableOpacity> 
    
        </View>*/}
              <View
             style={{
                backgroundColor:'red',
                height:85,
                width:120,
                justifyContent:'center',
                alignItems:'center',
              //  padding:12,
                borderTopRightRadius:18,
                borderBottomRightRadius:18,
                marginRight:5,
            }}
            >
    
                 <TouchableOpacity onPress={()=>handleDelete(item)}>
                   <Image 
                      source={icons.delete_1}
                      resizeMode='contain'
                      style={{
                        height:30,
                        width:30,
                        tintColor:COLORS.gray3
                      }}
                   />
                </TouchableOpacity> 
    
        </View>
          </View>
        )
        
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
                >Donation's Forms</Text>

            </View>
        )
    }

    function renderBody(){
        return(
            <ScrollView  
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={{
                 paddingBottom:100,
                 marginTop:SIZES.base
            }}>
             <FlatList 
                 data={appPanel}
                 numColumns={1}
                 renderItem={({item})=>(
                    <>
                    <Swipeable 
                        renderUnderlayLeft
                        renderRightActions={()=>ListItemDelet(item.id)}> 
                    <View  style={style.card} > 
                    <View style={{flexDirection:'row'}}>
                    <Image 
                          source={images.donate_logo}
                            resizeMode='contain'
                            style={{
                                height:60,
                                width:80,
                                borderRadius:SIZES.radius,
                                paddingHorizontal:SIZES.base,
                               
                            }}
                       />
                      <View style={{marginLeft:SIZES.base,justifyContent:'center', width:'70%'}}>
                       <Text style={style.label}>Donator Name:</Text>
                       <Text style={style.text}>{item.name}</Text>
                      </View>

                      <TouchableOpacity
                          onPress={()=>navigation.navigate('AdminStack',{screen:'Donate Details',params:{item:item}})}
                          style={{
                            marginTop:SIZES.radius,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:COLORS.primary,
                            height:40,
                            width:70,
                            marginLeft:-60,
                            borderRadius:SIZES.base
                            
                          }}
                      >
                         <Text style={{
                            fontWeight:'600',
                            color:COLORS.gray3
                        }}>View</Text>
                      </TouchableOpacity>
                      
                    </View>
                </View>
                </Swipeable>
               </>
             )}
             />
             
            
            </ScrollView>
        )
    }

    return(
        <View
             style={style.container}  
        >

         

            {/*renderbody*/}
            {renderBody()}

           
        </View>
    )
}





const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
     },
    body:{
        flex:1,
       
    },
    card:{
        backgroundColor:COLORS.gray3,
        borderColor:COLORS.primary,
        borderWidth:1,
        padding:12,
        borderRadius:18,
        marginHorizontal:10,
        marginBottom:8
       
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
    }
  
})


export default DonationList;