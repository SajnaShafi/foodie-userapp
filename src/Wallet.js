import React,{ Component } from 'react';
import{View,StyleSheet,Text} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';
export default class Wallet extends Component{
  render(){
      return(
        <View style={styles.container}>
                
        <View style={styles.header}>
        <Icon name='navicon' size={30} color='lime' padding='30' onPress={() =>
                      this.props.navigation.dispatch(
                        DrawerActions.toggleDrawer(),
                      )
                    } />
            <Text  style={styles.headertext}>Wallet</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodytext}>Wallet not updated</Text>
    </View>
    </View>
      )
    }
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
      backgroundColor:'#121318',
      
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
body:{

 marginTop: 250,
  justifyContent: 'center',
  alignItems: 'center',
},
bodytext:{
  fontSize:26,
    color:'limegreen'
},
});