import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    Alert,
    StyleSheet
} from 'react-native';
import { AppButton } from '../components';
import{
    COLORS,
    SIZES,
    images,
    FONTS,
} from '../constants';

import Divider from '../model/divider';



const DonateDetails = ({route,navigation})=>{
    const {item} = route.params

   useEffect(()=>{
  //  const item = route.params.item

    setUserData(item)
   })

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
 


   {/* function renderDetails(){
        return(
            <View
               style={{
                height:100,
                alignItems:'center'
               }}
            >
                 <Image 
                    source={images.slide_3}
                    resizeMode='contain'
                    style={{
                        marginTop:SIZES.base,
                        height:190,
                        width:'90%',
                        borderRadius:SIZES.radius
                    }}
                 />

            </View>
        )
                }
                */}


    function renderBody(){
        return(
            <View>
                 <View style={{
                    marginTop:SIZES.base,
                    marginBottom:SIZES.base,
                    justifyContent:'center',
                    alignItems:"center"
                }}>
                    <Text style={{
                        ...FONTS.h2,
                        fontWeight:'bold',
                    }}>Donator's Request Form Information</Text>
                </View>
            
            <View
               style={{
                height:'75%',
                marginHorizontal:SIZES.radius,
                borderTopRightRadius:SIZES.radius2,
                borderTopLeftRadius:SIZES.radius2,
                borderRadius:SIZES.radius,
                borderWidth:2,
                borderColor:COLORS.primary,
                backgroundColor:COLORS.lightGray1
               }}
            >
               <View style={{marginTop:SIZES.base,marginLeft:SIZES.padding,flexDirection:'row',padding:4,}}>
                  <Text style={style.label}>Name:</Text>
                  <Text style={style.text}>{userData.name}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Phone:</Text>
                  <Text style={style.text}>{item.phone}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Email:</Text>
                  <Text style={style.text}>{userData.email}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Donation Type:</Text>
                  <Text style={style.text}>{userData.items}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,width:'70%',flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text numberOfLines={1} style={style.label}>Address:</Text>
                  <Text style={style.text}>{userData.pickup}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Pickup Time:</Text>
                  <Text style={style.text}>{userData.pickupTime}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Pickup Date:</Text>
                  <Text style={style.text}>{userData.preferedDate}</Text>
               </View>
            </View>
         
            </View>
        )
    }


    function renderFooter(){
        return(
            <View
                style={{marginTop:-30, alignItems:'center'}}
            >
                  <AppButton
                    label='Respond'
                    buttonStyle={{
                        height:40,
                        width:"30%",
                        backgroundColor:COLORS.primary,
                        borderRadius:SIZES.radius2,     
                 }}

                 labelStyle={{paddingLeft:SIZES.padding, fontWeight:'bold',left:15}}

                
                  onPress={()=>navigation.navigate('AdminStack',{screen:'Feedback',params:{userData:userData.email}})}

                />

            </View>
        )
    }



    return(
        <ScrollView  
           contentContainerStyle={style.container}>
           {/*render Details*/}
          
           {/*renderBody*/}
           {renderBody()}
           {/*renderFooter*/}
           {renderFooter()}
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.gray3
    },
    label:{
        fontWeight:'600',
        fontSize:15,
        color:COLORS.gray1,
        paddingRight:SIZES.base
    },
    text:{
        fontWeight:'bold',
        color:COLORS.dark,
        fontSize:15,
    }
})

export default DonateDetails;