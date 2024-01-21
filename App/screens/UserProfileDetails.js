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
import { ColorSpace } from 'react-native-reanimated';



const UserProfileDetails = ({route,navigation})=>{

   useEffect(()=>{
    const item = route.params.item

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
 


    function renderDetails(){
        return(
            <View style={{
                marginTop:SIZES.padding,
                alignSelf:'center',
                height:90,
                width:90,
                justifyContent:'center',
                alignItems:'center',
                
             }}>
  
               <Image 
                  source={images.slide_1}
                  resizeMode='cover'
                  style={{
                      height:100,
                      width:100,
                      borderRadius:100,
                      borderWidth:3,
                      borderColor:COLORS.primary,
                   
                  }}
               />
             </View>
        )
                }
                


    function renderBody(){
        return(
            <View style={{
                alignItems:'center',
                marginTop:SIZES.base
            }}>
            <View
               style={{
                height:'65%',
                width:'84%',
                marginHorizontal:SIZES.radius,
                borderColor:COLORS.primary,
                backgroundColor:COLORS.gray3,
                borderRadius:SIZES.radius2,
                shadowColor:COLORS.primary,
                shadowOffset:{
                    width:0,
                    height:2
                },
                shadowOpacity:0.90,
                shadowRadius:3.90
               }}
            >
               <View style={{marginTop:SIZES.base,marginLeft:SIZES.padding,flexDirection:'row',padding:4,}}>
                  <Text style={style.label}>Name:</Text>
                  <Text style={style.text}>{userData.name}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Phone:</Text>
                  <Text style={style.text}>{userData.phone}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text style={style.label}>Email:</Text>
                  <Text style={style.text}>{userData.email}</Text>
               </View>
               <Divider />
               <View style={{marginLeft:SIZES.padding,width:'70%',flexDirection:'row',marginTop:SIZES.base,padding:4,}}>
                  <Text numberOfLines={1} style={style.label}>Address:</Text>
                  <Text style={style.text}>{userData.address}</Text>
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
                    label='Contact User'
                    buttonStyle={{
                        height:40,
                        width:"40%",
                        backgroundColor:COLORS.primary,
                        borderRadius:SIZES.radius2,     
                 }}

                 labelStyle={{paddingLeft:SIZES.padding, fontWeight:'bold'}}
                  onPress={()=>navigation.navigate('AdminStack',{screen:'Feedback',params:{userData:userData.email}})}

                />

            </View>
        )
    }



    return(
        <ScrollView  
           contentContainerStyle={style.container}>
           {/*render Details*/}
           {renderDetails()}
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
        color:COLORS.dark,
        paddingRight:SIZES.base
    },
    text:{
        fontWeight:'bold',
        color:COLORS.primary,
        fontSize:15,
    }
})

export default UserProfileDetails;