import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from './redux/CartItem'
import { color } from 'react-native-reanimated';
import { Button } from 'react-native';
import Homescreen from './homescreen';



function Separator() {
  return <View style={{ borderBottomWidth: 2, borderBottomColor: 'black' }} />
}
function CartScreen() {
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View
    style={styles.container}>
      
      <View style={styles.header}>
            <Icon name='navicon' size={30} color='lime' padding='30' onPress={() =>
                          navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        } />
                <Text  style={styles.headertext}>Cart</Text>
                
            </View>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
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
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>REMOVE</Text>
                  </TouchableOpacity>
                  
                </View>
               
              </View>
                 
              <View style={styles.order}>
              <Button
              title= "PLACE ORDER"
              color= "limegreen"
              onPress={() =>
              navigation.navigate('My orders')}>
              </Button> 
              </View>      
          </View>
          
          
          )}
          
        />
      ) : (
        
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
            <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home')} 
              style={styles.button}>
              <Text style={styles.buttonText}>ORDER NOW</Text>
            </TouchableOpacity>
        </View>
      
        
      )}
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121318'
  },

  header:{
      width:'100%',
      alignItems:'center',
      height:'10%',
      flexDirection:'row',
      paddingLeft:10

  },
  headertext:{
  
    fontSize:21,
      color:'#eaeaec',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'space-between',
      padding:'35%'
      
  },
  
  thumbnail: {
    width: '100%',
    height: 140
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
  viewstyle:{
    height:190,
    borderRadius:10,
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
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
    // paddingTop:5,
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
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
    color:'white'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200',
    color:'limegreen'
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'limegreen',
    padding: 5
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28,
    color:'limegreen'
  },
  order: {
    flexDirection:'column',
    justifyContent:'center'
    
  }
})

export default CartScreen