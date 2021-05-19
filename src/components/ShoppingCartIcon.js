import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/Entypo';

function ShoppingCartIcon(props) {
  return (
    <TouchableOpacity
      onPress={() => alert('Press me')}
     >
     <Icon1 name='shopping-cart' size={32} color='white' />
    </TouchableOpacity>
  )
}

export default ShoppingCartIcon