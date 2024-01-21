import React ,{useState}from "react";
import {
    View,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,Image,
    Alert
} from 'react-native'
import AppButton from "./AppButton";
import FormInput from "./FormInput";
import{
    COLORS,
    SIZES,
    images,
    icons,
    FONTS,
} from '../constants'
import {utils} from '../utils'
import FormImageInput from '../components/FormImageInput';



const FormModal = ({modalVisible,setModalVisible ,formType,})=>{


    const [name, setName] = React.useState("")
    const [imageUris,setImageUris] = useState([])
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [donateItem, setDonateItem] = useState("")
    const [pickup, setPickup] = useState("")
    const [time, setTime] = useState("")
    const [Date, setDate] = useState("")
    const [userData, setUserData] = useState([]);
    const [image, setImage] = useState(null);
    const [submitTime,setSubmitTime] = useState('')
   
   

    const [nameError, setNameError] = useState("")
    const [phonedError, setPhoneError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [donateError, setDonateError] = useState("")
    const [pickupError, setPickupError] = useState("")
    const [timeError, setTimeError] = useState("")
    const [DateError, setDateError] = useState("")
    const [uploading,setUploading] = useState(false)

    
   
    function handleAdd(uri){
        setImageUris([...imageUris,uri])
    }

    function handleRemove(uri){
        setImageUris(imageUris.filter(imageUri => imageUri!== uri))
    }

    function isEnableDonate(){
        return name !='' && phone !='' && email !=''
        && donateItem !='' && pickup !='' && time !=''
        && Date !='' && nameError == "" &&
        phonedError =="" && emailError == ""  &&
        donateError =="" && pickupError =="" && timeError ==""
        && DateError =="" 
    }

    const submitForm = async()=>{
        let imgUrl = await uploadImage();
        if(imgUrl == null && userData.userImg){
         imgUrl = userData.userImg
        }
    
                 // Add a new document with a generated id.
          
            }


            {/*upload Image to firebase sotrage*/}
    const uploadImage = async ()=>{
           
           }
    

    
    return(
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
            flex:1,
            marginTop:SIZES.radius,
            backgroundColor:COLORS.gray3,
            borderRadius:SIZES.radius2,
        }}>
          <TouchableOpacity
           onPress={()=>setModalVisible(!modalVisible)}
           style={{
            padding:SIZES.radius
           }}
          >
            <Image 
               source={icons.cross}
               style={{
                height:23,
                width:23,
                tintColor:COLORS.darkGray2
               }}
           />
          </TouchableOpacity>

          <View 
             style={{
                marginTop:-SIZES.radius,
                padding:SIZES.base,
                marginBottom:SIZES.padding
             }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color:COLORS.black,
                fontWeight:'800'
              }}
            >{formType}</Text>
            <Text
               style={{
                ...FONTS.body3,
                color:COLORS.gray2,
              
               }}
            >Please fill in the required information..</Text>
          </View>

          {/*the form details*/}
          <ScrollView
          style={{
            marginTop:SIZES.padding,
            paddingHorizontal:SIZES.padding,
            bottom:SIZES.padding2
          }}
        >
            {/*Add Image*/}
            <View
              style={{
                height:100
              }}
            >
                 <FormImageInput 
                   imageUris={imageUris}
                     onAddImage={handleAdd}
                     onRemoveImage={handleRemove}
                 />
            </View>
                {/*Donator Name*/}
            <FormInput
                label='Donator Name:'
                value={name}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:73,
                }}

                onChange={(value)=>{
                    utils.validateInput(value, 1,
                        setNameError)
                        setName(value)
                    
                }}
                errorMsg={nameError}
                />
                
                {/*Donatore Phone*/}
            <FormInput
                label='Phone:'
                keyboardType='number-pad'
                value={phone}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    width:230,
                    height:73,
                }}
                
                onChange={(value)=>{
                    utils.validateInput(value, 10,
                        setPhoneError)
                        setPhone(value)
                    
                }}
                errorMsg={phonedError}
                />
                {/*Donatore Email*/}
            <FormInput
                label='Email:'
                keyboardType='email-address'
                value={email}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:73,
                }}

                
                onChange={(value)=>{
                     //validate email
               utils.validateEmail(value, setEmailError)
               setEmail(value)  
                }}
                errorMsg={emailError}
                />
             {/*Food*/}
             <FormInput
                label='Donate Items:'
                value={donateItem}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:73,
                }}

                onChange={(value)=>{
                    utils.validateInput(value, 1,
                        setDonateError)
                        setDonateItem(value)
                }}
                errorMsg={donateError}
                />    

                  {/*Donatore Address*/}
               <FormInput
                label='Pick-up Address:'
                value={pickup}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:100
                }}
                
                onChange={(value)=>{
                    utils.validateInput(value, 1,
                        setPickupError)
                        setPickup(value)
                }}
                errorMsg={pickupError}
                />
             {/*Time*/}
             <FormInput
                label='Prefered Time:'
                value={time}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:73,
                }}

                onChange={(value)=>{
                    utils.validateInput(value, 1,
                        setTimeError)
                        setTime(value)
                }}
                errorMsg={timeError}
                />
              {/*Date*/}
              <FormInput
                label='Pickup Date:'
                value={Date}
                containerStyle={{
                    marginTop:SIZES.radius, 
                    height:73,
                }}

                onChange={(value)=>{
                    utils.validateInput(value, 1,
                        setDateError)
                        setDate(value)
                }}
                errorMsg={DateError}
                />              

               
                 
                 {/*Donate Button*/}
              <View
                 style={{
                    marginTop:SIZES.padding,
                    justifyContent:'center',
                    alignItems:'center'
                 }}
              >
                 <AppButton
                    label='Donate'
                    disabled={!isEnableDonate()}
                    buttonStyle={{
                        height:50,
                        width:"90%",
                        borderRadius:SIZES.radius,
                        backgroundColor:isEnableDonate()?
                        COLORS.primary:COLORS.gray2
                    }}
                    labelStyle={{
                        ...FONTS.h3,
                        fontWeight:'bold',
                        color:COLORS.gray3
                    }}

                    onPress={()=>{
                        submitForm()
                        setModalVisible(!modalVisible)
                    
                    }}
                 />
            

              </View>
                
        </ScrollView>
        </View>
    </Modal>
    )
}



export default FormModal