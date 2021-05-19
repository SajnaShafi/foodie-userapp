
 import React,{ Component }from 'react';
 import {NavBarCustom}from './src/NavBarCustom';
import Homescreen from './src/homescreen';
import Wallet from './src/Wallet';
import Login from './src/Login';
import Support from './src/Support';
import IPL_Challenge from './src/IPL_challenge';
import Challenge_Winners from './src/Challenge_winners';
import MY_Profile from './src/MY_Profile';
import Location from './src/Location';
import Subscribe from './src/Subscribe';
import Signin from './src/Signin';
import Forgot from './src/Forgot';
import Splashscreen from './src/Splashscreen';
import CartScreen from './src/CartScreen';
import Myorder from './src/Myorders'

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

const Drawer = createDrawerNavigator();
export default class app extends Component {
  render() {
    return (
      <StoreProvider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <NavBarCustom {...props} />}
         drawerStyle={{
          width:320,
        }}>
          
          <Drawer.Screen name="Home" component={Homescreen} /> 
          <Drawer.Screen name="My Orders" component={Login} />
          <Drawer.Screen name="Wallet" component={Wallet} />
          <Drawer.Screen name="Account" component={MY_Profile} />
          <Drawer.Screen name="Support" component={Support} />
          <Drawer.Screen name="IPL Challenge" component={IPL_Challenge} />
          <Drawer.Screen name="IPL Challenge Winners" component={Challenge_Winners} />
          <Drawer.Screen name="Profile" component={MY_Profile}/> 
          <Drawer.Screen name="Location" component={Location}/> 
          <Drawer.Screen name="Subscribe" component={Subscribe}/>
          <Drawer.Screen name="Signin" component={Signin}/> 
          <Drawer.Screen name="Forgot" component={Forgot}/>
          <Drawer.Screen name="Login" component={Login}/>
          <Drawer.Screen name="Splashscreen" component={Splashscreen}/>
          <Drawer.Screen name="Cart" component={CartScreen}/>
          <Drawer.Screen name="My orders" component={Myorder}/>
          
          </Drawer.Navigator>
      </NavigationContainer>
      </StoreProvider>
    );
  }
}

