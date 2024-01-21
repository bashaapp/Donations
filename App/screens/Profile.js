import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import{
    COLORS,
    SIZES,
    icons,
    FONTS,
    images,
} from '../constants';



const Profile = ({navigation})=>{

    const [userData, setUserData] = useState(null)



    useEffect(()=>{

        const getUserData = async ()=>{
         
    
        }
        getUserData();
      },[])

      const handleSignOut = ()=>{
       
      }
    
    


    function renderHeader(){
        return(
            <View
               style={{
                backgroundColor:COLORS.primary,
                height:250,
                paddingTop:SIZES.radius3,
                borderBottomRightRadius:SIZES.radius3
               }}
            > 
             
            <View style={{
                marginTop:30,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image 
                source={images.donate_logo}
                 resizeMode='contain'
                 style={{
                    height:100,
                    width:100,
                    borderRadius:100,
                    borderWidth:1,
                    borderColor:COLORS.gray3,
                 }}
             />

               <Text
                   style={{
                    ...FONTS.h1,
                    marginTop:10,
                    color:COLORS.gray3,
                    fontWeight:'bold',
                   }}
               >{userData ? userData.name:''}</Text>
                    
            </View>
            </View>
        )
    }


    function renderDetails(){
       return(
        <View style={style.body}>
           {/*background to style the curve*/}
           <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:COLORS.primary}} />   
        <View
        style={{
            flex:1,
            alignItems:'center',  
            backgroundColor: COLORS.gray3,
           borderTopLeftRadius:SIZES.radius3}}
     >
       
        
        {/*My Profile*/}
         <TouchableOpacity
            style={{
             marginVertical:30,     
             height:55,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             marginBottom:5,
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius,
             

            }}
            onPress={()=>navigation.navigate('Edit')}
         >
             <Image 
                source={icons.profile}
                resizeMode="contain"
                style={{
                 height:25,
                 width:25,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.orange
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>My Profile</Text>

            

         </TouchableOpacity>

           {/*My Account*/}
           <TouchableOpacity
            style={{
             height:55,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             marginBottom:5,
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}

            onPress={()=>navigation.navigate('Account')}
         >
             <Image 
                source={icons.account}
                resizeMode="contain"
                style={{
                    height:25,
                    width:25,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.orange
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>My Account</Text>

            

         </TouchableOpacity>

             {/*Favourite*/}
             <TouchableOpacity
            style={{
             height:55,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             marginBottom:5,
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}
         >
             <Image 
                source={icons.terms}
                resizeMode="contain"
                style={{
                    height:25,
                 width:25,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.orange
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>Term & Condition</Text>

            

         </TouchableOpacity>

          
          {/*Setting*/}
          <TouchableOpacity
            style={{
             height:55,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}
            onPress={()=>handleSignOut()}
         >
             <Image 
                source={icons.logout}
                resizeMode="contain"
                style={{
                    height:25,
                    width:25,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.orange
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>logout</Text>

            

         </TouchableOpacity>

       

     </View>
        </View>
   
       )
    }



    function renderFooter(){
        return(
            <View
                 style={{
                   
                    justifyContent:'center',
                    alignItems:'center',
                 }}
            >
            <TouchableOpacity
                style={{
                    height:40,
                    bottom:40,
                    width:"30%",
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:COLORS.primary,
                    borderRadius:SIZES.base,
                    flexDirection:'row',
                    
                    
                }}
            >

                <Image
                   source={icons.logout}
                   style={{
                    height:23,
                    width:23,
                    tintColor:COLORS.orange,
                    marginRight:SIZES.base,

                   }}
                />

                <Text
                   style={{
                    ...FONTS.h3,
                    fontWeight:'bold',
                    color:COLORS.gray3
                   }}
                >Logout</Text>

            </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={{
            flex:1,
        }}>
          {/*renderHeader*/}
          {renderHeader()}

          {/*renderDetails*/}
          {renderDetails()}

          {/*renderFooter*/}
          {renderFooter()}
        </View>
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

export default Profile;