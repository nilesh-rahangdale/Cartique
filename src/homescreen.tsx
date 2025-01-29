import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation import
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './App'
//screens
import Header from './Component/header'
import Product from './Component/product'
import Cart from './Component/cart'
//initialise navigation
type homeProps=NativeStackScreenProps<RootStackParamList,'Home'>

export default function Home({navigation}:homeProps):JSX.Element {
  const inventory=[
    {
      "id":"1",
      "name":"Samsung S20 Ultra",
      "price":50000,
      "imgSrc":"https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-500x500.jpg"
    },
    {
      "id":"2",
      "name":"Iphone 11",
      "price":60000,
      "imgSrc":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082"
    },
    {
      "id":"3",
      "name":"Redmi Note 9",
      "Price":11000,
      "imgSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR7l2XMWJFZaLAFoxan7bcmS9YsPDJYFsrQ&s"
    },
    {
      "id":"4",
      "name":"Samsung S20 Ultra",
      "price":50000,
      "imgSrc":"https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-500x500.jpg"
    },
    {
      "id":"5",
      "name":"Iphone 11",
      "price":60000,
      "imgSrc":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566960958082"
    },
    {
      "id":"6",
      "name":"Redmi Note 9",
      "Price":11000,
      "imgSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR7l2XMWJFZaLAFoxan7bcmS9YsPDJYFsrQ&s"
    }
  ]
  return (
    <View>
      <StatusBar backgroundColor={"#6200EE"} barStyle={"light-content"}/>
      <Header />
      <ScrollView style={{padding:10,marginBottom:50}}>
      {
        inventory.map((item)=><Product key={item.id} item={item} />)
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
})