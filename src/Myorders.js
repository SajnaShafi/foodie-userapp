import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,KeyboardAvoidingView,ScrollView,FlatList, Alert } from 'react-native';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { foods } from './utils/Data'

const Myorder = ({navigation})=>{
  const [Quantity,setQuantity] = useState("")
  const [Payment,setPayment] = useState("")
  const [Name,setfullName] = useState("")
  const [Contactnumber,setContactNumber] = useState("")
  const [Addressline1,setStreet] = useState("")
  const [Addressline2,setLandmark] = useState("")
  const [Pincode,setPincode] = useState("")
  const [City,setCity] = useState("")
  const [State,setStete] = useState("")
 const submitData = ()=>{
  
  fetch("http://192.168.42.136:5000/userapppost",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        
          Quantity,
          Payment,
          Name,
          Contactnumber,
          Addressline1,
          Addressline2,
          Pincode,
          City,
          State
      })
  })
  .then(res=>res.json())
  .then(data=>{
      Alert.alert(`Ordered successfuly....                        Get back soon`)
      navigation.navigate('Home')
  })
  .catch(err=>{
    Alert.alert("someting went wrong")
    
})
}
 
 
    return(
      
       
      <View style={styles.container}>

      <TouchableOpacity style={styles.head} onPress={() =>
                            this.props.navigation.navigate('Cart')
                          } >
      <Icons name='chevron-left' size={38} color='#37af0c' style={styles.icon}  onPress={() =>
                            this.props.navigation.navigate('Cart')
                          } />
                </TouchableOpacity>
      
      
                <Text style={styles.Newuser}>Order Summary</Text>
      
                
               <ScrollView>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Item:  Grill Chicken  </Text>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Price:   360/-</Text>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setQuantity(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Quantity" 
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setPayment(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Payment" 
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"/>
                     <TextInput style={styles.inputBox}
                      onChangeText={text => setfullName(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="FullName" 
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setContactNumber(text)} 
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="ContactNumber"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setStreet(text)} 
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Street"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setLandmark(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Landmark"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setPincode(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Pincode"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setCity(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="City"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setStete(text)}
                      underlineColorAndroid = "#9d9d9f"
                      placeholder="Stete"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Order Price:                             360/-</Text>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Delivery Charges:                   50/-</Text>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Tax:                                            10/-</Text>
                      <Text style={styles.inputBox}
                      underlineColorAndroid = "#9d9d9f"
                      selectionColor="#fff">Total:                                         420/-</Text>
                     <TouchableOpacity style={styles.button} onPress={() =>
                          submitData()}>
                        <Text style={styles.buttonText}>Order Now</Text>
                     </TouchableOpacity>
                     </ScrollView>
                    </View>
          
          );
                        }   
                  
      
                            
                    
    
              
    

      
  
      
      
       
   const styles = StyleSheet.create({
  container: {
              
  height:'100%',
  width:'100%',
  backgroundColor:'black',
  textAlign: 'center',
           
      
          },
          head:{
              backgroundColor:'black',
              width:'20%',
              height:'3%'
              
          },
      
          inputBox: {
              width: Dimensions.get('window').width,
              backgroundColor: '#000', 
              paddingHorizontal:25,
              fontSize: 16,
              color: '#fff',
              marginVertical: 10,
              marginTop:14,
              justifyContent: 'center',
              alignItems: 'center',
              
          },
          button: {
              width: Dimensions.get('window').width,
              height:50,
              left:15,
              backgroundColor:'#21680c',
              borderRadius: 5,
              marginVertical: 15,
              paddingVertical: 12,
              padding:100,
           
      
          },
        
          buttonText: {
              fontSize: 14,
              fontWeight: '500',
              color: "#9d9d9f",
              textAlign: 'center'
          },
          Newuser: {
              fontSize: 20,
              marginTop:-30,
              marginLeft:20,
              fontWeight: '500',
              color: '#ffffff',
              paddingVertical:10,
              paddingHorizontal:35
              
          },
          icon:{
              
              marginTop:3,
              marginLeft:10,
              marginBottom:3
       
              
          }
        
      }
   )

   export default Myorder