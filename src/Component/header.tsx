import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import { useSelector } from 'react-redux';
import {  RootStackParamList} from "../App";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// const headerProps=NativeStackScreenProps<RootStackParamList,'Home'>

export default function Header({route}:any) {
  const navigation=useNavigation()
  const cartData = useSelector((state: any) => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamazon</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
      <View style={styles.cartContainer}>
        <Image style={styles.img} source={require('./images/cart.png')} />
        <Text style={styles.cartCount}>{cartItems}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  cartCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});