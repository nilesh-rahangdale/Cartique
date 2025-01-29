import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Navigation import
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Home from './homescreen'
import Cart from './Component/cart'
//initializing native-stack
export type RootStackParamList={
  Home:undefined 
  User:undefined
  Cart:undefined
}
const Stack=createNativeStackNavigator<RootStackParamList>()
export default function App():JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})