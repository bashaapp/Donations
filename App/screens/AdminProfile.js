import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity 
} from 'react-native';
import{
    COLORS,
    SIZES,
    icons,
    FONTS,
    images,
} from '../constants';




const AdminProfile = ({navigation})=>{

    const [ userData, setUserData] = useState(null)



    useEffect(()=>{

       
      },[])
    


    function renderHeader(){
        return(
            <View
               style={{
                backgroundColor:COLORS.primary,
                height:150,
                paddingTop:SIZES.radius3
               }}
            > 
            <View style={{
                marginTop:90,
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image 
                source={images.slide_1}
                resizeMode='cover'
                 style={{
                    height:90,
                    width:90,
                    borderRadius:100,
                    borderWidth:1,
                    borderColor:COLORS.gray3,
                 }}
             />

               <Text
                   style={{
                    ...FONTS.h3,
                    marginTop:5,
                    color:COLORS.black,
                    fontWeight:'bold',
                   }}
               >{userData ? userData.name:''}</Text>
                    
            </View>
            </View>
        )
    }


    function renderDetails(){
       return(
        <View
        style={{
         flex:1,
         marginTop:110,
         marginLeft:SIZES.padding
        }} 
     >
        {/*My Profile*/}
         <TouchableOpacity
            style={{
             height:50,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             marginBottom:SIZES.base,
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}
          //  onPress={()=>navigation.navigate('Edit')}

            onPress={()=>navigation.navigate('AdminStack',{screen:'Edi'})}
         >
             <Image 
                source={icons.profile}
                resizeMode="contain"
                style={{
                 height:22,
                 width:22,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.darkGray2
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>Admin Profile</Text>

            

         </TouchableOpacity>

           {/*My Account*/}
           <TouchableOpacity
            style={{
             height:50,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             marginBottom:SIZES.base,
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}

            onPress={()=>navigation.navigate('AdminStack',{screen:'AdminAccount'})}
         >
             <Image 
                source={icons.account}
                resizeMode="contain"
                style={{
                 height:22,
                 width:22,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.darkGray2
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>Admin Account</Text>

            

         </TouchableOpacity>

          {/*Setting*/}
          <TouchableOpacity
            style={{
             height:50,
             width:'95%',
             paddingHorizontal:SIZES.base,
             alignItems:'center',  
             flexDirection:'row',
             backgroundColor:COLORS.primary,
             borderRadius:SIZES.radius

            }}
         >
             <Image 
                source={icons.setting}
                resizeMode="contain"
                style={{
                 height:22,
                 width:22,
                 marginRight:SIZES.radius,
                 tintColor:COLORS.darkGray2
                }}
             />
             
             <Text style={{
                 fontSize:SIZES.h3,
                 fontWeight:'bold',
                 color:COLORS.gray3
             }}>Settings</Text>

            

         </TouchableOpacity>

       

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
                    tintColor:COLORS.gray3,
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

export default AdminProfile;