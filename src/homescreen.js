import React, { Component } from 'react';
import {Text,StyleSheet, View,TextInput,Image,TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { foods } from './utils/Data'

import {useDispatch,useSelector } from 'react-redux'
import { ADD_TO_CART } from './redux/CartItem'
function Separator() {
  return <View style={{ borderBottomWidth: 3, borderBottomColor: 'black' }} />
}
function Homescreen() {
  const navigation = useNavigation()
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })

    return (
      <View style={styles.container}>
        <View style={styles.header}> 
         <Icon name='navicon' size={26} color='white'onPress={() =>
                          navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        } style={{paddingLeft:7}}/>
            
        <Icons name='location-pin' size={18} color='#37af0c'onPress={() =>
                      navigation.navigate('Location')
                    }  style={{paddingLeft:12}}/>
         <Text onPress={() =>
                      navigation.navigate('Location')
                    }  style={styles.place}>Rajapalayam </Text>
                    
 <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <View style={styles.cart}>
         <Icon1  name='shopping-cart' size={22} color='white' onPress={() =>
                      navigation.navigate('Cart')
                    }/>
                   
      </View>
      </View>
      
       <View style={styles.body}>
         
        <Text style={styles.text}>Discover new  </Text>
        <Text style={styles.text}>tasting experience</Text>
       </View>
       <View style={styles.searchfield}>
         <Icon2 style={styles.searchfieldicon} name='search1' size={16} color='#37af0c' />
          <TextInput style={styles.searchfieldtext} defaultValue='Search for Restaurants,Foods....'color='grey'/>
        </View>
       <View style={styles.searchfield}>
       <Text style={styles.near}>Near You</Text>
       </View>
      
          
   
       <FlatList
            data={foods}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({ item }) => (
              <View style={styles.viewstyle}>
              <View style={styles.imagebody}>
                <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                <View style={styles.rate}>
            <Text style={styles.text1}>{item.rate}</Text>
           </View>
           <View style={styles.resname}>
            <Text style={styles.text2}>{item.name}</Text>
             <Text style={styles.text2}>{item.food}</Text>
           </View>
              </View>    
              <View style={styles.viewstylecontent}>
        <View>
       <Text style={styles.baseText}>{item.min}</Text>
       <Text style={styles.bottom}>{item.dt}</Text>
        
       </View> 
       <View>
       <Text style={styles.baseText1}>{item.time}</Text>
       <Text style={styles.bottom1}>{item.ot} </Text>
       </View>
       <View>
       <Text style={styles.baseText2}>{item.time1}</Text>
       <Text style={styles.bottom2}>{item.ct} </Text>
       </View> 
       <View>    
       <Text style={styles.baseText3}>{item.closed}</Text>
       <Text style={styles.bottom3}>{item.status}</Text>
       </View>
       </View>
      <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.button}>
  <Text style={styles.buttonText}>ADD TO CART</Text>
</TouchableOpacity>
                  </View>
                </View>
             
              
            )}
          />
        </View>
       
            
  
     
      )
    }

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'black',
  },
  header:{
    flexDirection: 'row',
    marginBottom:5,
    marginTop:10,
    paddingBottom:5,
    height:40,
    paddingTop:5,
    paddingLeft:5,
  },
  place:{
    color:'white',
    marginLeft:9,
    width:300,
    fontSize:15,
  },
  cart:{
    marginTop:5,
    marginRight:10,
    position:'absolute',
    right:1,
  },
  body:{
    height:80,
    paddingTop:-30,
  },
  text:{
    color:'#37af0c',
    fontSize: 33,
    paddingLeft:8,
  },
  searchfield:{
    flexDirection:'row',
    marginLeft:5,
    paddingTop:14,
    paddingBottom:10,
  },
  searchfieldicon:{
   paddingTop:5,
   paddingBottom:5,
   paddingRight:10,
   marginTop:5,
   marginLeft:5,
  },
  searchfieldtext:{
    paddingBottom:5,
    paddingTop:5,
    paddingLeft:5,
  },
  near:{
    color:'#4a4b50',
    fontSize:18,
    paddingLeft:8,
  },
  viewstyle:{
    height:190,
   borderRadius:10,
   borderWidth:1,
   marginLeft:10,
   marginRight:10,
   marginTop:15,
  },
  imagebody:{
    flex:1,
    borderTopWidth:6,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden',
    opacity:0.7,
    height:140,
  },
  
  rate:{
    position:'absolute',
    backgroundColor:'lime',
    height:20,
    width:30,
    right:1,
    borderRadius:10,
    paddingLeft:6,
    marginRight:8,
    marginTop:8,
   },
   text1:{
    color:'white',
    fontSize:12,
  },
  resname:{
    position:'absolute',
    color:'white',
    marginTop:90,
    marginLeft:10,

  },
  text2:{
    color:'white',
  },
  viewstylecontent:{
    flexDirection:'row',
    backgroundColor:'#282a36',
    borderBottomWidth:1,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    // marginLeft:3,
    // marginRight:11,
    marginTop:-1,
    paddingTop:5,
    paddingLeft:10,
    paddingRight:8,
    height:50,
    justifyContent:'space-between',
  },
  baseText:{
    color:'white',
    fontSize:12,
   },
   baseText1:{
     color:'white',
     fontSize:12,
    //  paddingLeft:60,
    },
    baseText2:{
     color:'white',
     fontSize:12,
    //  paddingLeft:50,
    },
    baseText3:{
     color:'#37af0c',
     fontSize:12,
    //  paddingLeft:50,
    },
    viewstylecontent1:{
    flexDirection:'row',
    marginLeft:11,
    marginRight:11,
    marginTop:-45,
    paddingTop:15,
    paddingLeft:5,
    },
    bottom:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    },
    bottom1:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    // paddingLeft:10,
    },
    bottom2:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    // paddingLeft:35,
    },
    bottom3:{
    color:'grey', 
    fontSize:10,
    paddingTop:5,
    // paddingLeft:40,
  },
 
          
  
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10, 
  },
  thumbnail: {
    width: '100%',
    height: 170
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',color:'white'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200',color:'limegreen'
  },
  buttonContainer: {
    position: 'absolute',
    top: 7,
    left: 0
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'limegreen',
    padding: 5
  },
  buttonText: {
    fontSize: 12,
    color: 'white'
  },
  button1: {
    marginRight: 15
  },
  itemCountContainer: {
    position: 'absolute',
    height: 18,
    width: 18,
    borderRadius: 15,
    backgroundColor: 'limegreen',
    right: 28,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export default Homescreen