import { Button, Image, StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native';
import React, { useEffect,useState } from 'react';
//redux import
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from './Redux/action'
import { removeFromCart } from './Redux/action';
export default function Product(props: any) {
  const item = props.item;
  const dispatch=useDispatch()

  const [isPresent,setIsPresent]=useState(false)
  const cartData=useSelector((state:any)=>state.reducer)
  const handleAddToCart=(item:any)=>(
    dispatch(addToCart(item))
  )
  
  const handleRemoveFromCart=(item:any)=>{
    dispatch(removeFromCart(item))
  }
  useEffect(()=>{
    let res=cartData.filter((element:any)=>element.id===item.id)
    if(res.length){
      setIsPresent(true)
    }else{
      setIsPresent(false)
    }
  },[cartData])

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: item.imgSrc }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}> ₹ {item.price}</Text>

      {isPresent ?
      <TouchableOpacity style={styles.buttonRed}
      onPress={()=>handleRemoveFromCart(item)}
      >
        <Text style={styles.buttonText}>Remove From Cart</Text>
      </TouchableOpacity> 
      :
      <TouchableOpacity style={styles.button}
      onPress={()=>handleAddToCart(item)}
      >
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonRed: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});